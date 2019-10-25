import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";
import ThemeVars from "../../ThemeVariables";

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
`;

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  children?: any;
  backgroundColor?: string;
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

const StyledNavBarMenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;

  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;
  }
`;

export const NavBarMenuItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...restProps
}) => {
  return <StyledNavBarMenuItem {...restProps}>{children}</StyledNavBarMenuItem>;
};
