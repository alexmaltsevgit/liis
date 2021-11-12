import React, { useDebugValue } from "react";
import { ErrorMessage, LabelText, InputContainer } from "./InputWrapper.styles";
import { FieldError } from "react-hook-form";

type InputWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error?: FieldError;
};

const InputWrapper = ({ label, children, error }: InputWrapperProps) => {
  useDebugValue(children);

  return (
    <InputContainer>
      {label && <LabelText>{label}</LabelText>}
      {children}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};
export default InputWrapper;
