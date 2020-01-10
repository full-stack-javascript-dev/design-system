function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled, { css } from "styled-components";
import { defaultBreakpoints } from "../components/responsiveBreakpoints";
/*
const bpc = {} as any;
const breakpoints = [bpc]
  .map(bpc => bpc.config)
  .concat({})
  .map(config => config.breakpoints)
  .concat([]);
  */

const StyledLayoutContentColumns = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;

  ${props => css`
      @media (min-width: 800px) {
        flex-direction: row;
        & > div + div {
          margin-left: 30px;
        }
      }
    `}

  ${props => css`
      ${((props.config || {}).breakpoints || []).map(breakpoint => `
  @media (min-width: ${breakpoint.minWidth}) {
    width: ${breakpoint.width};
  }
  `).join("")}
    `}
`;
const defaultConfig = {
  breakpoints: defaultBreakpoints
}; // TODO: Provide prop that exposes fund to resolve gridtemplatecolumn layout for different breakpoints

export const LayoutContentColumns = ({
  children,
  config = defaultConfig,
  ...restProps
}) => {
  return React.createElement(StyledLayoutContentColumns, _extends({
    "data-fsjsd-el": "LayoutContentColumns",
    config: config
  }, restProps), children);
};
export const LayoutContentColumn = ({
  children,
  ...restProps
}) => {
  return React.createElement("div", _extends({
    "data-fsjsd-el": "LayoutContentColumn"
  }, restProps), children);
};