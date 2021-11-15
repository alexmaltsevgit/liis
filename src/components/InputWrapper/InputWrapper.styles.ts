import styled, { css } from "styled-components";
import { AppTheme } from "../../themes/types";

type InputWrapperProps = {
  theme: AppTheme;
  error?: boolean;
  mt: string;
};

type BaseTextStyleProps = {
  bold: boolean;
};

export const InputContainer = styled.div<InputWrapperProps>`
  width: 100%;
  margin-top: ${({ mt }) => mt};

  color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.text.primary};

  input {
    display: block;
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};

    &:not([type="submit"]) {
      padding: 10px 20px;

      border-width: 1px;
      border-style: solid;
      border-color: ${({ error, theme }) =>
        error ? theme.colors.red : "#c9cacc"};

      &:focus {
        outline: none;
      }
    }

    &[type="submit"] {
      background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
      border: 1px ${({ theme }) => theme.colors.green} solid;
      color: #fff;
      font-weight: 500;

      &:hover,
      &:active {
        cursor: pointer;
      }
    }
  }
`;

const BaseTextStyle = css<BaseTextStyleProps>`
  display: block;
  font-weight: ${({ bold }) => (bold ? 500 : 300)};
`;

export const LabelText = styled.span`
  ${BaseTextStyle};
  margin-bottom: 7px;
`;

export const ErrorMessage = styled.span`
  ${BaseTextStyle};
  margin-top: 7px;
  font-size: 0.75rem;
`;
