import styled from "styled-components";
import { AppTheme } from "../../themes/types";

type StarSVGProps = {
  theme: AppTheme;
  active?: boolean;
};

export const StarContainer = styled.div<StarSVGProps>`
  display: inline;

  svg path {
    fill: ${({ theme, active }) =>
      active
        ? theme.colors.yellow
        : "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #6C6845;"};
  }
`;
