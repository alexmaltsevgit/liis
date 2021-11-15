import styled from "styled-components";
import { AppTheme } from "../../themes/types";
import { transparentize } from "polished";
import { Order } from "../HotelsList/HotelsList.types";

type TabProps = {
  theme: AppTheme;
  order: "ASC" | "DESC";
  active?: boolean;
};

const arrowColorByOrder = (theme: AppTheme, order: Order, needed: Order) =>
  order === needed
    ? theme.colors.green
    : transparentize(0.7, theme.colors.green);

export const Arrows = styled.div`
  display: inline-block;
  height: 100%;
  max-height: 100%;
  margin-left: 9px;
`;

export const ArrowWrapper = styled.span<{
  theme: AppTheme;
  down?: boolean;
}>`
  display: flex;
  height: fit-content;
  transform: ${({ down }) => down && "rotate(180deg)"};

  svg,
  path {
    fill: ${({ theme }) => theme.colors.light};
    transition: all 0.2s linear;
  }
`;

export const Tab = styled.button<TabProps>`
  display: inline-block;
  width: fit-content;

  color: ${({ theme, active }) =>
    active ? `${theme.colors.dark}` : theme.colors.light};

  border-color: ${({ theme, active }) =>
    active ? `${theme.colors.dark}` : theme.colors.light};

  ${ArrowWrapper} {
    svg,
    path {
      fill: ${({ theme, active }) =>
        !active && transparentize(0.7, theme.colors.green)} !important;
    }

    &:first-child {
      svg,
      path {
        fill: ${({ theme, order }) => arrowColorByOrder(theme, order, "ASC")};
      }
    }

    &:last-child {
      svg,
      path {
        fill: ${({ theme, order }) => arrowColorByOrder(theme, order, "DESC")};
      }
    }
  }
`;
