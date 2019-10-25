import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";
import ThemeVars from "../ThemeVariables";

const StyledButton = styled.button`
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: ${ThemeVars.colors.primary};
  padding: 10px 14px;
  transition: background-color 0.4s ease;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  ${CssNoSelect}

  &:hover {
    background-color: rgb(13, 150, 255);
  }

  &:active,
  &:hover:active {
    background-color: ${ThemeVars.colors.primaryActive};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

interface ButtonGroupProps extends React.HTMLAttributes<any> {
  children: any;
}

const ButtonGroupStyled = styled.div`
  button + button {
    margin-left: 6px;
  }
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  ...restProps
}) => {
  return <ButtonGroupStyled {...restProps}>{children}</ButtonGroupStyled>;
};
