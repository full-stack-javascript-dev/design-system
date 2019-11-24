function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled, { css } from "styled-components";
const StyledPageHeaderWrapper = styled.div`
  ${props => props.backgroundColor && css`
      background-color: ${props.backgroundColor};
    `}
  ${props => typeof props.backgroundImage !== undefined && css`
      background-image: url('${props.backgroundImage}');
      background-position: center center;
      background-size: cover;
    `}
  ${props => props.coverImage && css`
      background-position: center center;
      background-size: cover;
    `}
  ${props => props.coverImageBlur && css`
      position: relative;
      width: 100%;
    `}
`;
export const PageHeaderWrapper = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledPageHeaderWrapper, _extends({
    "data-fsjsd-el": "PageHeaderWrapper"
  }, restProps), children);
};