import React from "react";
import { SignInCard, SignInContainer, Title } from "./SignIn.styles";
import SignInForm from "../../components/SignInForm/SignInForm.component";
import Background from "./Background/Background.component";

const SignIn = () => {
  return (
    <SignInContainer>
      <Background />
      <SignInCard>
        <Title>Simple Hotel Check</Title>
        <SignInForm />
      </SignInCard>
    </SignInContainer>
  );
};

export default SignIn;
