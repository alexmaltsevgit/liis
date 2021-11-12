import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

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

export const LabelText = styled.span``;

export const ErrorMessage = styled.span``;
