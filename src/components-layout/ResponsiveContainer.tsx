import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";
import ThemeVars from "../ThemeVariables";

const StyledResponsiveContainer = styled.div<ResponsiveContainerProps>`
  display: flex;

  ${props =>
    props.config &&
    props.config.breakpoints &&
    css`
      ${props.config.breakpoints
        .map(
          breakpoint => `
  @media (min-width: ${breakpoint.minWidth}) {
    width: ${breakpoint.width};
  }
  `
        )
        .join("")}
    `}

  ${props =>
    props.centreContainer &&
    css`
      margin: 0 auto;
    `}
`;
interface ResponsiveContainerBreakpoint {
  minWidth: number | string;
  width: number | string;
}

interface ResponsiveContainerConfig {
  breakpoints: ResponsiveContainerBreakpoint[];
}

interface ResponsiveContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  centreContainer?: boolean;
  config?: ResponsiveContainerConfig;
}

// TODO: Resolve default from Theme Provider?

const defaultConfig: ResponsiveContainerConfig = {
  breakpoints: [
    { width: "480px", minWidth: "480px" },
    { width: "768px", minWidth: "768px" },
    { width: "992px", minWidth: "992px" },
    { width: "1200px", minWidth: "1200px" }
  ]
};

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  centreContainer = false,
  config = defaultConfig,
  ...restProps
}) => {
  return (
    <StyledResponsiveContainer
      centreContainer={centreContainer}
      config={config}
      {...restProps}
    >
      {children}
    </StyledResponsiveContainer>
  );
};
