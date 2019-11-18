import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

import {
  defaultBreakpoints,
  ResponsiveContainerBreakpoint
} from "../components/responsiveBreakpoints";

const StyledResponsiveContainer = styled.div<ResponsiveContainerProps>`
  display: flex;
  padding: 0 20px;
  ${props =>
    props.config &&
    props.config.breakpoints &&
    css`
      ${props.config.breakpoints
        .map(
          breakpoint => `
  @media (min-width: ${breakpoint.minWidth}) {
    padding:0 ${breakpoint.contentPadding};
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
  breakpoints: defaultBreakpoints
};

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  centreContainer = false,
  config = defaultConfig,
  ...restProps
}) => {
  return (
    <StyledResponsiveContainer
      data-fsjsd-el="ResponsiveContainer"
      centreContainer={centreContainer}
      config={config}
      {...restProps}
    >
      {children}
    </StyledResponsiveContainer>
  );
};
