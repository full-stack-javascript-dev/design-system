function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled, { css } from "styled-components";
const StyledPageHeader = styled.div`
  display: flex;
  position: relative;
  ${props => props.backgroundColor && css`
      background-color: ${props.backgroundColor};
    `}
`;
export const PageHeader = ({
  children,
  backgroundColor,
  ...restProps
}) => {
  return React.createElement(StyledPageHeader, _extends({
    "data-fsjsd-el": "PageHeader",
    backgroundColor: backgroundColor
  }, restProps), children);
};
const StyledPageHeaderContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;

  h1 {
    font-family: Montserrat, sans serif;
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    letter-spacing: -2pt;
    font-size: 42px;
    margin-top: 22px;
    margin-bottom: 11px;
  }

  p {
    color: #fff;
    margin: 0 0 11px;
    font-size: 20px;
  }
`;
export const PageHeaderContent = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledPageHeaderContent, _extends({
    "data-fsjsd-el": "PageHeaderContent"
  }, restProps), children);
};