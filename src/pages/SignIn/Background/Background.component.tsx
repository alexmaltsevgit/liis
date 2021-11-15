import React from "react";
import background from "../../../images/sign-in-bg.jpg";
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWhiteBox,
} from "./Background.style";

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundImage src={background} />
      <BackgroundWhiteBox />
    </BackgroundContainer>
  );
};

export default Background;
