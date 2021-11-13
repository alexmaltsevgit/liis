import styled from "styled-components";
import { AppTheme } from "../../themes/types";
import { lighten } from "polished";

type StarSVGProps = {
  theme: AppTheme;
  active?: boolean;
};

export const HeartContainer = styled.div<StarSVGProps>`
  display: inline;
  cursor: pointer;

  svg,
  path {
    fill: ${({ theme, active }) =>
      active ? theme.colors.red : theme.colors.text.secondary};

    transition: fill 0.1s linear;

    &:hover {
      fill: ${({ theme, active }) =>
        lighten(0.1, active ? theme.colors.red : theme.colors.text.secondary)};
    }
  }
`;
