import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { AppTheme } from "./themes/types";

type GlobalStyleProps = {
  theme: AppTheme;
};

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 100%; // 16px by default
    font-family: Roboto, sans-serif;
    color: ${({ theme }: GlobalStyleProps) => theme.colors.text.primary};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h1 {
    font-size: 0;
    line-height: 0;
    font-weight: 0;
  };
  
  h2 {
    font-size: 2rem; // 32px
    line-height: 2.3125rem; // 37px
    font-weight: 500;
  };
  
  h3 {
    font-size: 1.5rem; // 24px
    line-height: 1.75rem; // 28px
    font-weight: 400;
  };
  
  h4 {
    font-size: 1.0625rem; // 17px
    line-height: 1.375rem; // 22px
    font-weight: 400;
  };
  
  h5 {
    font-size: 0;
    line-height: 0;
    font-weight: 0;
  };
  
  h6 {
    font-size: 0;
    line-height: 0;
    font-weight: 0;
  };
  
  p {
    font-size: 0;
    line-height: 0;
    font-weight: 0;
  };

  input {
    display: block;
    width: 100%;
    border-radius: 4px;

    &:not([type="submit"]) {
      padding: 10px 20px;
      border: 1px #c9cacc solid;

      &:focus {
        outline: none;
      }
    }

    &[type="submit"] {
      background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
      border: 1px;
      color: #fff;
      font-weight: 500;

      &:hover,
      &:active {
        cursor: pointer;
      }
    }
  }
`;
