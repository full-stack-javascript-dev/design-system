function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled, { css } from "styled-components";
const StyledNavBar = styled.nav`
  display: block;
  border-bottom-width: 0;
  margin-bottom: 0;
  width: 100%;
  ${props => props.backgroundColor && css`
      background-color: ${props.backgroundColor};
    `}
  ${props => props.background && css`
      background: ${props.background};
    `}
`;
export const NavBar = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledNavBar, restProps, children);
};
const StyledNavBarLogo = styled.div`
  flex-grow: 1;
`;
export const NavBarLogo = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledNavBarLogo, restProps, children);
};
const StyledNavBarMenu = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  align-content: center;
`;
export const NavBarMenu = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledNavBarMenu, restProps, children);
};

const StyledNavBarMenuItem = comp => styled(comp)`
  display: flex;
  align-items: center;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
  text-shadow: 0 0 4px #6b6b6b;
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.15);
    transition: background-color 0.3s ease;
    text-decoration: none;
  }
`;

const NavBarMenuItemDiv = StyledNavBarMenuItem("div");
export const NavBarMenuItem = ({
  children,
  ...restProps
}) => {
  return React.createElement(NavBarMenuItemDiv, _extends({
    "data-fsjsd-el": "NavBarMenuItem"
  }, restProps), React.createElement("div", null, children));
};
/** Allows wrapping of NavBarMenuItem. This should be declared in your module with a const
 * OUTSIDE of your component before use in render/JSX
 */

export const NavBarMenuItemComponent = component => ({
  children,
  ...restProps
}) => {
  const NavBarMenuItem = StyledNavBarMenuItem(component);
  return React.createElement(NavBarMenuItem, _extends({
    "data-fsjsd-el": "NavBarMenuItemComponent"
  }, restProps), children);
};