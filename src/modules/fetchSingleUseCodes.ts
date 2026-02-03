import {
    AxiosClient,
    AxiosClientConfigurator,
  } from "@xatom/axios";
  import { WFComponent } from "@xatom/core";
  import { getCookie } from "../utils/cookies";

export const fetchSingleUseCode = () => {
    const codeSections = document.querySelectorAll(`.single-use-code-section`);
    
    codeSections.forEach((section) => {
      const getCodeBtn = new WFComponent<HTMLDivElement>(section.querySelector(`.get-code-button`));
      const getCodeBtnText = new WFComponent<HTMLDivElement>(section.querySelector(`.get-code-button-text`));
      const getCodeBtnLoader = new WFComponent<HTMLDivElement>(section.querySelector(`.get-code-button-loader`));
      const singleUseCode = new WFComponent<HTMLDivElement>(section.querySelector(`.is-single-use-code`));
      const singleUseCodeName = new WFComponent<HTMLDivElement>(section.querySelector(`.single-use-code_provider-name`));
      const sucText = new WFComponent<HTMLDivElement>(section.querySelector(`.single-use-code-text`));
      const copyCodeBtn = new WFComponent<HTMLDivElement>(section.querySelector(`.copy-code-button`));
      const useCodeBtn = new WFComponent<HTMLDivElement>(section.querySelector(`.use-this-code`));
      const iconCopy = new WFComponent<HTMLDivElement>(section.querySelector(`.copy-code-button > .icon-copy`));
      const iconCheck = new WFComponent<HTMLDivElement>(section.querySelector(`.copy-code-button > .icon-check`));
      const codeError = new WFComponent<HTMLDivElement>(section.querySelector(`.code-error`));
      const codeErrorText = new WFComponent<HTMLDivElement>(section.querySelector(`.code-error-text`));
    
      // Define a click event handler function
      const fetchSuc = (e) => {
        e.preventDefault();
        console.log("Fetching code");
        let ucnValue = getCookie('ucn');
        const ucn = ucnValue;
        const url = window.location.href;
        const providerString = singleUseCodeName.getText();
        const discountProviderName = providerString;
        
        let endpoint = window.location.href.startsWith('http://localhost:3020') 
        ? process.env.LOCAL 
        : process.env.API_BASE_URL;
    
        // Configure the base URL for your API
        const axiosConfigurator = new AxiosClientConfigurator(
          endpoint
        );
    
        const axiosClient = new AxiosClient(axiosConfigurator);
    
        // Define the expected response format
        interface singleUseCodeResponse {
          code: string; 
          success: boolean;
          message?: string;
        }
    
        const fetchCodeRequest = axiosClient.post<singleUseCodeResponse>("/api/fetchSuc", {
          data: {ucn, url, discountProviderName},
        });
    
        fetchCodeRequest.onLoadingChange((status) => {
          if (status === true){
            getCodeBtnText.addCssClass('hide');
            getCodeBtnLoader.removeCssClass('hide');
          } else {
            getCodeBtnText.removeCssClass('hide');
            getCodeBtnLoader.addCssClass('hide');
          }
        });
    
        fetchCodeRequest.onData((response) => {
          console.log("Response:", response);
          sucText.setText(response.code);
          singleUseCode.removeCssClass('hide');
          useCodeBtn.removeCssClass('hide');
          getCodeBtn.addCssClass('hide');
          codeError.addCssClass('hide');
        });
    
        fetchCodeRequest.onError((error) => {
          console.log('Error:', error.response.data.error);
          
          const codeErrorTexta = codeErrorText.getElement();
          codeError.removeCssClass('hide');
          if (error.status === 429) {
            codeErrorTexta.innerHTML = `${error.response.data.error} contact support`;
          } else {
            codeErrorTexta.innerHTML = `${error.response.data.error}`;
          }
        });
    
        fetchCodeRequest.fetch();
      };
    
      // Attach the click event listener to the getCode button
      getCodeBtn.on("click", fetchSuc);
      
      const copyCode = async () => {
        const code = sucText.getText().trim();
        await navigator.clipboard.writeText(code);
    
        // Show success feedback
        iconCopy.addCssClass('hide');
        iconCheck.removeCssClass('hide');
    
        // Revert back after 2 seconds
        setTimeout(() => {
          iconCopy.removeCssClass('hide');
          iconCheck.addCssClass('hide');
        }, 2000);
      };
      
      // Attach the click event listener to the copyCode button
      copyCodeBtn.on("click", copyCode);
    });
  };