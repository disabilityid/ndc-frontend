import { WFRoute, WFComponent, onReady } from "@xatom/core";
import { membershipCheck } from "../modules/checkMembership";
import { fetchSingleUseCode } from "../modules/fetchSingleUseCode";

// Function to set a cookie with a specific name, value, and expiration in days
export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    // Remove leading spaces and check if cookie starts with the target name
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};

// Function to handle fetch requests with a timeout
export const fetchWithTimeout = (url, options, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
};

export const globalFnRoutes = () => {
  new WFRoute("/(.*)").execute(() => {
    // Global funcs here
    //console.log("I am a global func");
    // If the user clicks logout, set the membershipValid cookie to false
    const logoutButton = document.querySelector('.dropdown-link.is-logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        setCookie('membershipValid', 'false', 1/24);
        document.cookie = "ucn=; path=/";
        document.cookie = "authUrl=; path=/";
        location.reload();
      });
    }
    });
};

export const loginRoutes = () => {
  new WFRoute("/login").execute(() => {
    membershipCheck(window.location.href);

    // If the user is now logged in hide the login form inside the .login-wrapper and change the p to read "You are logged in" then add a link to the /discounts-and-benefits page
    const loginWrapper = new WFComponent<HTMLDivElement>(".login-wrapper");
    if (loginWrapper) {
      loginWrapper.setStyle({ display: "none" });
      const loginWrapperEl = loginWrapper.getElement();
      loginWrapperEl.offsetHeight; // Force reflow
    }
    const loginParagraph = new WFComponent<HTMLParagraphElement>("p");
    if (loginParagraph) {
      loginParagraph.setText("You are logged in");
      const loginParagraphEl = loginParagraph.getElement();
      loginParagraphEl.offsetHeight; // Force reflow
    }
    const loginLink = new WFComponent<HTMLAnchorElement>("a");
    if (loginLink) {
      loginLink.setText("Go to discounts and benefits");
      const loginLinkEl = loginLink.getElement();
      loginLinkEl.offsetHeight; // Force reflow
    }
    loginLink.on('click', () => {
      window.location.href = "/discounts-and-benefits";
    });

    // If the user clicks logout, set the membershipValid cookie to false
    const logoutButton = document.querySelector('.dropdown-link.is-logout');

    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        location.reload();
      });
    }
  })
}

export const discountListRoutes = () => {
  new WFRoute("/discounts-and-benefits").execute(() => {
    membershipCheck(window.location.href);

    const selects = new WFComponent<HTMLSelectElement>("select");
    const option = selects.getChildAsComponents("option");
    const firstOption = option[0];
    firstOption.setAttribute("disabled", "disabled");

    onReady(() => {
      // Remove Expired cards from the DOM
      // Get the current date
      const currentDate = new Date();

      // Select all elements with the class 'expiry'
      const expiryElements = document.querySelectorAll('.expiry');

      expiryElements.forEach(function(element) {
        // Read the expiry date from the data attribute
        const expiryDateString = element.getAttribute('data-expiry');
        
        // Check if the expiry date is not null
        if (expiryDateString) {
          // Convert the expiry date string to a Date object
          const expiryDate = new Date(expiryDateString);
          
          // If the expiry date is in the past, remove the parent card from the DOM
          if (expiryDate < currentDate) {
            const cardElement = element.closest('.discount_item'); // Assuming the card has a class 'card'
            if (cardElement) {
              cardElement.remove();
            }
          }
        }
      });  
    });
  });
};

export const discountPageRoutes = () => {
  new WFRoute("/discount/(.*)").execute(() => {
    // pass the current page url to the membershipCheck function to be used as the url
    membershipCheck(window.location.href);
    fetchSingleUseCode();

    // Check for the 'membershipValid' cookie
    const membershipValid = getCookie('membershipValid') === 'true';

    if (!membershipValid) {
      // If the cookie is not set or is false, display the modal
      const membershipModal = new WFComponent<HTMLDivElement>(".membership-modal");
      if (membershipModal) {
          membershipModal.setStyle({ display: "block" });
          const membershipModalEl = membershipModal.getElement();
          membershipModalEl.offsetHeight; // Force reflow
          membershipModal.addCssClass('show-modal');
      }
    }
    
    const logoutButton = document.querySelector('.dropdown-link.is-logout');

    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        // Set the membershipValid cookie to false
        document.cookie = "membershipValid=false; path=/";
        
        // Refresh the page
        location.reload();
      });
    }
    fetchSingleUseCode();
  });
};