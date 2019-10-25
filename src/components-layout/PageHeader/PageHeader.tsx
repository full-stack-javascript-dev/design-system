import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";
import ThemeVars from "../../ThemeVariables";

const StyledPageHeader = styled.div`
  display: flex;
`;

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  ...restProps
}) => {
  return <StyledPageHeader {...restProps}>{children}</StyledPageHeader>;
};
