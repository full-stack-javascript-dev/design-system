function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
export const ImgResponsiveStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  ${props => props.border && `border: solid 1px rgba(0,0,0,0.3);`}
  ${props => props.shadow && `box-shadow: 0 -5px 15px 0 rgba(0,0,0,0.2);`}
  ${props => props.onClick && `cursor: pointer; 
    transition:ease opacity 0.3s;
    &:hover{
      opacity:0.7;
    }`}
`;
export const ImgResponsive = ({
  border,
  shadow,
  ...props
}) => {
  return React.createElement(ImgResponsiveStyled, _extends({
    border: border,
    shadow: shadow
  }, props));
};