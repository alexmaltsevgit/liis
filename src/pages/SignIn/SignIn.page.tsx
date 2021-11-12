import React from "react";
import { SignInCard, SignInContainer, Title } from "./SignIn.styles";
import SignInForm from "../../components/SignInForm/SignInForm.component";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInCard>
        <Title>Simple Hotel Check</Title>
        <SignInForm />
      </SignInCard>
    </SignInContainer>
  );
};

export default SignIn;
