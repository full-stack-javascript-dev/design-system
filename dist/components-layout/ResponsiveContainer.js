function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled, { css } from "styled-components";
import { defaultBreakpoints } from "../components/responsiveBreakpoints";
const StyledResponsiveContainer = styled.div`
  display: flex;
  padding: 0 20px;
  position: relative;
  ${props => props.config && props.config.breakpoints && css`
      ${props.config.breakpoints.map(breakpoint => `
  @media (min-width: ${breakpoint.minWidth}) {
    padding:0 ${breakpoint.contentPadding};
    width: ${breakpoint.width};
  }
  `).join("")}
    `}

  ${props => props.centreContainer && css`
      margin: 0 auto;
    `}
`;
// TODO: Resolve default from Theme Provider?
const defaultConfig = {
  breakpoints: defaultBreakpoints
};
export const ResponsiveContainer = ({
  children,
  centreContainer = false,
  config = defaultConfig,
  ...restProps
}) => {
  return React.createElement(StyledResponsiveContainer, _extends({
    "data-fsjsd-el": "ResponsiveContainer",
    centreContainer: centreContainer,
    config: config
  }, restProps), children);
};