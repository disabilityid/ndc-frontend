import {
    AxiosClient,
    AxiosClientConfigurator,
  } from "@xatom/axios";
  import { onReady } from "@xatom/core";
  import { WFComponent } from "@xatom/core";
  import { WFFormComponent } from "@xatom/core";
  import { getCookie, setCookie } from "../routes";
  
  export const membershipCheck = (url: string) => {
    let endpoint = window.location.href.startsWith('http://localhost:3020') 
    ? process.env.LOCAL 
    : process.env.API_BASE_URL;

    const axiosConfigurator = new AxiosClientConfigurator(
        endpoint
    );
    const axiosClient = new AxiosClient(axiosConfigurator);

    interface MembershipCheckPayload {
        ucn: string;
        url: string;
        redirectUrl: string;
        membershipValid: boolean;
        isBannerClick: boolean;
    }

    const showError = (message) => {
        const formError = new WFComponent<HTMLDivElement>(".form_error-wrapper");
        const formErrorText = new WFComponent<HTMLDivElement>(".form_error-message");
        formError.setStyle({ display: "inline-flex" });
        formErrorText.setText(message);
    };
  
    onReady(() => {
        try {
            const membershipCheckBtn = new WFComponent<HTMLDivElement>(".membership-check-button");
            const modalCloseButtonEl = document.querySelector(".modal1_close-button");
            const modalBackgroundEl = document.querySelector(".modal1_background-overlay");
            const formError = new WFComponent<HTMLDivElement>(".form_error-wrapper");
            const formErrorText = new WFComponent<HTMLDivElement>(".form_error-message");
            
            // Try to get modal element, but don't fail if it doesn't exist (e.g., on /login page)
            let membershipModal: WFComponent<HTMLDivElement> | null = null;

            try {
                membershipModal = new WFComponent<HTMLDivElement>(".membership-modal");
            } catch (e) {
                console.log('Membership modal not found, continuing without it');
            }

            // Try to get storefront element, but don't fail if it doesn't exist
            let storefrontBanner: WFComponent<HTMLDivElement> | null = null;

            try {
                storefrontBanner = new WFComponent<HTMLDivElement>('[xa-elem="storefront"]');
            } catch (e) {
                console.log('Storefront element not found, continuing without it');
            }
  
            const loginForm = new WFFormComponent<{
                ucn: string;
                url: string;
            }>(".cardnumberform");
  
            const hideError = () => {
                formError.setStyle({ display: "none" });
                formErrorText.setText('');
            };
            
            const membershipValid = getCookie('membershipValid') === 'true';

            const getRedirectUrl = (event?: Event) => {
                // If we're in the storefront flow, use the storefront URL
                if (event?.target && (event.target as Element).closest('[xa-elem="storefront"]')) {
                    return process.env.TILLO_STOREFRONT_URL;
                }
                // Otherwise use the clicked card URL, or fallback to current page URL
                return clickedCardUrl || url;
            };

            const handleMembershipCheck = async (event?: Event) => {
                if (!membershipValid) {
                    // Always show membership modal for invalid membership
                    if (membershipModal) {
                        membershipModal.setStyle({ display: "block" });
                        membershipModal.addCssClass('show-modal');
                    }
                } else if (membershipValid) {
                    window.location.href = clickedCardUrl;
                } else {
                    if (membershipModal) {
                        membershipModal.setStyle({ display: "block" });
                        membershipModal.addCssClass('show-modal');
                    }
                }
            };
  
            const onModalClose = (e) => {
                e.preventDefault();
                if (window.location.pathname === '/discounts-and-benefits') {
                    membershipModal.setStyle({ display: "none" });
                    membershipModal.removeCssClass('show-modal');
                    hideError();
                }
            };
  
            if (modalCloseButtonEl) {
                const modalCloseButton = new WFComponent<HTMLAnchorElement>(".modal1_close-button");
                modalCloseButton.on('click', onModalClose);
            }
            if (modalBackgroundEl) {
                const modalBackground = new WFComponent<HTMLDivElement>(".modal1_background-overlay");
                modalBackground.on('click', onModalClose);
            }
  
            let clickedCardUrl = "";
            let isBannerClick = false;

            // Try to get discount list element, but don't fail if it doesn't exist (e.g., on /login page)
            let parentContainer: WFComponent<HTMLDivElement> | null = null;

            try {
                parentContainer = new WFComponent<HTMLDivElement>(".discount_list");
            } catch (e) {
                console.log('Discount list not found, continuing without it');
            }

            if (parentContainer) {
                parentContainer.on("click", async (e) => {
                    let card = (e.target as Element).closest(".card");
                    if (!card) return; // Exit if the click wasn't on a card

                    e.preventDefault();  // Stop default navigation
                    
                    isBannerClick = false;
                    console.log('isBannerClick:', isBannerClick);

                    // Get the URL directly from the card's href since it is an anchor tag
                    clickedCardUrl = (card as HTMLAnchorElement).href;
                    console.log('Card URL:', clickedCardUrl);

                    const hiddenUrlField = document.querySelector('.hiddenUrlField');
                    if (hiddenUrlField) {
                        hiddenUrlField.setAttribute("value", clickedCardUrl);
                    }

                    await handleMembershipCheck(e);
                });
            }

            if (storefrontBanner) {
                storefrontBanner.on('click', async (e) => {
                    e.preventDefault();
                    isBannerClick = true;
                    console.log('isBannerClick:', isBannerClick);
                    clickedCardUrl = process.env.TILLO_STOREFRONT_URL;
                    console.log('Storefront URL:', clickedCardUrl);
                    await handleMembershipCheck(e);
                });
            }

            loginForm.onFormSubmit((data) => {
                const ucn = getCookie('ucn') || data.ucn;
                const payload: MembershipCheckPayload = {
                    ucn: ucn,
                    url: getRedirectUrl(),
                    redirectUrl: '',
                    membershipValid: false,
                    isBannerClick: isBannerClick
                };
                
                // set up membership check to accept the url parameter as an arg from the discount page
                const membershipCheck = axiosClient.post<MembershipCheckPayload>("/api/membershipCheck?mode=json&url=" + url, {
                    data: payload,
                });

                membershipCheck.onLoadingChange((status) => {
                    if (status === true) {
                        membershipCheckBtn.setAttribute("value", "Checking card number...");
                    } else {
                        membershipCheckBtn.setAttribute("value", "Submit");
                    }
                });

                membershipCheck.onData((data) => {
                    if (data.membershipValid === true) {

                        setCookie('membershipValid', 'true', 1/24);
                        setCookie('ucn', data.ucn, 1/24);
                        
                        // Use the redirectUrl from the response if available
                        if (data.redirectUrl) {
                            // first reload the page
                            window.location.reload();
                            console.log('Redirecting to URL:', data.redirectUrl);
                            // If redirecting to the same page, reload instead
                            if (data.redirectUrl === window.location.href) {
                                window.location.reload();
                            } else {
                                window.location.href = data.redirectUrl;
                            }
                        } else {
                            // Otherwise use the clicked card URL
                            window.location.href = clickedCardUrl;
                        }
                        
                        if (membershipModal) {
                            membershipModal.setStyle({ display: "none" });
                            membershipModal.removeCssClass('show-modal');
                        }

                    } else {
                        setCookie('membershipValid', 'false', 1/24);
                        showError(`Something went wrong, please check your card number and try again.`);
                    }
                });

                membershipCheck.onError((error) => {
                    setCookie('membershipValid', 'false', 1/24);
                    if (error.status === 404) {
                        showError('Card number not found.');
                    } else if (error.status === 400) {
                        showError('Your unique card number is required');
                    } else if (error.message === 'Timeout') {
                        showError('Request timed out. Please try again.');
                    } else {
                        showError('Something went wrong, please try again.');
                    }
                });

                membershipCheck.fetch(payload);
            });
        } catch (error) {
            console.error('Error initializing membership check:', error);
            showError('Something went wrong, please try again.');
        }
    });
  };