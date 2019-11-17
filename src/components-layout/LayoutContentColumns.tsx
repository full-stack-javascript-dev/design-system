import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

import {
  defaultBreakpoints,
  ResponsiveContainerBreakpoint
} from "../components/responsiveBreakpoints";

/*
const bpc = {} as any;
const breakpoints = [bpc]
  .map(bpc => bpc.config)
  .concat({})
  .map(config => config.breakpoints)
  .concat([]);
  */

const StyledLayoutContentColumns = styled.div<LayoutContentColumnsConfigProps>`
  display: flex;
  flex-direction: column;
  padding: 25px 0;

  ${props =>
    css`
      @media (min-width: 600px) {
        flex-direction: row;
      }
    `}

  ${props =>
    css`
      ${((props.config || {}).breakpoints || [])
        .map(
          breakpoint => `
  @media (min-width: ${breakpoint.minWidth}) {
    width: ${breakpoint.width};
  }
  `
        )
        .join("")}
    `}
`;

interface LayoutContentColumnsConfig {
  breakpoints: ResponsiveContainerBreakpoint[];
}

interface LayoutContentColumnsConfigProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns?: string;
  config?: LayoutContentColumnsConfig;
}

const defaultConfig: LayoutContentColumnsConfig = {
  breakpoints: defaultBreakpoints
};

// TODO: Provide prop that exposes fund to resolve gridtemplatecolumn layout for different breakpoints

export const LayoutContentColumns: React.FC<LayoutContentColumnsConfigProps> = ({
  children,
  config = defaultConfig,
  ...restProps
}) => {
  return (
    <StyledLayoutContentColumns
      data-fsjsd-el="LayoutContentColumns"
      config={config}
      {...restProps}
    >
      {children}
    </StyledLayoutContentColumns>
  );
};

export const LayoutContentColumn: React.FC<React.HTMLAttributes<
  HTMLDivElement
>> = ({ children, ...restProps }) => {
  return (
    <div data-fsjsd-el="LayoutContentColumn" {...restProps}>
      {children}
    </div>
  );
};
