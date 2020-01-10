function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

const sizeOffset = size => {
  return {
    small: -2,
    medium: 2,
    large: 12
  }[size];
};

const fontOffset = size => {
  return {
    small: -1,
    medium: 0,
    large: 6
  }[size];
};

const basePadding = props => {
  return props.theme.units.forms.padding + sizeOffset(props.size);
};

const baseFont = props => {
  return props.theme.units.forms.fontSize + fontOffset(props.size);
};

const StyledButtonFunc = comp => styled(comp)`
  display:${props => props.block ? "block" : "inline-block"};
  border-radius: 6px;
  border: none;
  font-family:${props => props.theme.fonts.button};
  font-size: ${props => baseFont(props)}px;
  font-weight: bold;
  color: ${props => props.theme.components.button.textColor};
  background-color: ${props => props.theme.components.button.backgroundColor};
  transition: box-shadow 0.2s ease, padding 0.2s ease, background-color 0.4s ease;
  outline: none;
  cursor: pointer;
  ${CssNoSelect}
  box-sizing:border-box;
  box-shadow: 0 -3px 0 rgba(0,0,0,0.2) inset;
  padding-left:${props => basePadding(props) + 8}px;
  padding-right:${props => basePadding(props) + 8}px;
  padding-top: ${props => basePadding(props) + 0}px;
  padding-bottom: ${props => basePadding(props) + 0}px;

  &:hover {
    color: ${props => props.theme.components.button.textColor};
    text-decoration:none;
    background-color: ${props => (props.theme.components.button.hover || props.theme.components.button).backgroundColor};
  }

  &:active,
  &:hover:active {
    //padding-top: 15px;
    //padding-bottom: 9px;
    box-shadow: 0 3px 0 rgba(0,0,0,0.2) inset;
    background-color: ${props => props.theme.colors.primaryActive};
  }
`;

const StyledButtonLink = StyledButtonFunc("a");
const StyledButton = StyledButtonFunc("button");
export const Button = ({
  size = 'medium',
  block = false,
  children,
  ...restProps
}) => {
  return React.createElement(StyledButton, _extends({
    size: size,
    block: block
  }, restProps), children);
};
export const ButtonLink = ({
  size = 'medium',
  block = false,
  children,
  ...restProps
}) => {
  return React.createElement(StyledButtonLink, _extends({
    size: size,
    block: block
  }, restProps), children);
};
const ButtonGroupStyled = styled.div`
  button + button {
    margin-left: 6px;
  }
`;
export const ButtonGroup = ({
  children,
  ...restProps
}) => {
  return React.createElement(ButtonGroupStyled, restProps, children);
};