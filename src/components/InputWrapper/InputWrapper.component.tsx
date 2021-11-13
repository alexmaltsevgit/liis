import React from "react";
import { ErrorMessage, LabelText, InputContainer } from "./InputWrapper.styles";
import { FieldError } from "react-hook-form";

type InputWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error?: FieldError;

  mt?: string;
  bold?: boolean;
};

const InputWrapper = ({
  label,
  children,
  error,
  mt = "0",
  bold = false,
}: InputWrapperProps) => {
  return (
    <InputContainer mt={mt} error={Boolean(error)}>
      {label && <LabelText bold={bold}>{label}</LabelText>}
      {children}
      {error && <ErrorMessage bold={bold}>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};
export default InputWrapper;
