import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  filter: blur(5px);
`;

export const BackgroundWhiteBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 50%;
`;
