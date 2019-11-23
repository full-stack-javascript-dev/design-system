import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";

const StyledNavBar = styled.nav<NavBarProps>`
  display: block;
  border-bottom-width: 0;
  margin-bottom: 0;
  width: 100%;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  children?: any;
  backgroundColor?: string;
  background?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ children, ...restProps }) => {
  return <StyledNavBar {...restProps}>{children}</StyledNavBar>;
};

const StyledNavBarLogo = styled.div`
  flex-grow: 1;
`;

export const NavBarLogo: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...restProps
}) => {
  return <StyledNavBarLogo {...restProps}>{children}</StyledNavBarLogo>;
};

const StyledNavBarMenu = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const NavBarMenu: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...restProps
}) => {
  return <StyledNavBarMenu {...restProps}>{children}</StyledNavBarMenu>;
};

const StyledNavBarMenuItem = (comp: any) => styled(comp)`
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

export const NavBarMenuItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <NavBarMenuItemDiv data-fsjsd-el="NavBarMenuItem" {...restProps}>
      <div>{children}</div>
    </NavBarMenuItemDiv>
  );
};

/** Allows wrapping of NavBarMenuItem. This should be declared in your module with a const
 * OUTSIDE of your component before use in render/JSX
 */
export const NavBarMenuItemComponent = (
  component: React.ReactNode
): React.FC<any> => ({ children, ...restProps }) => {
  const NavBarMenuItem = StyledNavBarMenuItem(component);
  return (
    <NavBarMenuItem data-fsjsd-el="NavBarMenuItemComponent" {...restProps}>
      {children}
    </NavBarMenuItem>
  );
};
