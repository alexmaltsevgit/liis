import styled from "styled-components";
import { AppTheme } from "../../themes/types";

export const List = styled.ul<{
  theme: AppTheme;
  hasScrollbar?: boolean;
}>`
  flex: 1;
  height: 0;
  overflow-y: auto;

  padding-right: ${({ hasScrollbar }) => (hasScrollbar ? "15px" : 0)};
`;

export const Tabs = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Item = styled.li``;

export const EmptyTitle = styled.h3`
  margin-top: 1.5rem;
`;
