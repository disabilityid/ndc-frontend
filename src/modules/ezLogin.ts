import {
  AxiosClient,
  AxiosClientConfigurator,
} from "@xatom/axios";
import { onReady } from "@xatom/core";
import { WFComponent } from "@xatom/core";
import { getCookie } from "../utils/cookies";

// Shared flag: when modal is shown from ezButton, form submit goes to enduranceZoneLogin
declare global {
  interface Window {
    __ezLoginModalActive?: boolean;
  }
}

export const ezLogin = (url: string) => {
  let endpoint = window.location.href.startsWith('http://localhost:3020')
    ? process.env.LOCAL
    : process.env.API_BASE_URL;

  const axiosConfigurator = new AxiosClientConfigurator(endpoint);
  const axiosClient = new AxiosClient(axiosConfigurator);

  interface EnduranceZoneLoginPayload {
    ucn: string;
    url: string;
    redirectUrl: string;
    membershipValid: boolean;
    isStorefrontClick: boolean;
  }

  onReady(() => {
    try {
      const modalCloseButtonEl = document.querySelector(".modal1_close-button");
      const modalBackgroundEl = document.querySelector(".modal1_background-overlay");

      let membershipModal: WFComponent<HTMLDivElement> | null = null;
      try {
        membershipModal = new WFComponent<HTMLDivElement>(".membership-modal");
      } catch (e) {
        console.log('Membership modal not found, continuing without it');
      }

      let ezButton: WFComponent<HTMLButtonElement> | null = null;
      try {
        ezButton = new WFComponent<HTMLButtonElement>('[xa-elem="ez"]');
      } catch (e) {
        console.log('EZ element not found, continuing without it');
        return;
      }

      const handleEzLogin = async (e?: Event) => {
        e?.preventDefault();

        const membershipValid = getCookie('membershipValid') === 'true';

        if (!membershipValid) {
          window.__ezLoginModalActive = true;
          if (membershipModal) {
            membershipModal.setStyle({ display: "block" });
            membershipModal.addCssClass('show-modal');
          }
          return;
        }

        const ucn = getCookie('ucn');
        if (!ucn) {
          window.__ezLoginModalActive = true;
          if (membershipModal) {
            membershipModal.setStyle({ display: "block" });
            membershipModal.addCssClass('show-modal');
          }
          return;
        }

        window.__ezLoginModalActive = false;

        const payload: EnduranceZoneLoginPayload = {
          ucn: ucn,
          url: url,
          redirectUrl: '',
          membershipValid: true,
          isStorefrontClick: false,
        };

        const enduranceZoneLogin = axiosClient.post<EnduranceZoneLoginPayload>(
          "/api/enduranceZoneLogin?mode=json&url=" + url,
          { data: payload }
        );

        enduranceZoneLogin.onData((data) => {
          if (data.membershipValid === true && data.redirectUrl) {
            console.log('Redirecting to URL:', data.redirectUrl);
            if (data.redirectUrl === window.location.href) {
              window.location.reload();
            } else {
              window.location.href = data.redirectUrl;
            }
          } else {
            if (membershipModal) {
              membershipModal.setStyle({ display: "block" });
              membershipModal.addCssClass('show-modal');
            }
          }
        });

        enduranceZoneLogin.onError((error) => {
          console.error('Endurance zone login error:', error);
          if (membershipModal) {
            membershipModal.setStyle({ display: "block" });
            membershipModal.addCssClass('show-modal');
          }
        });

        enduranceZoneLogin.fetch(payload);
      };

      const onModalClose = (e) => {
        e.preventDefault();
        if (window.location.pathname.includes('/discounts-and-benefits')) {
          membershipModal?.setStyle({ display: "none" });
          membershipModal?.removeCssClass('show-modal');
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

      ezButton.on('click', handleEzLogin);
    } catch (error) {
      console.error('Error initializing ez login:', error);
    }
  });
};
