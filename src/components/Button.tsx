import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

const StyledButton = styled.button`
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.components.button.textColor};
  background-color: ${props => props.theme.components.button.backgroundColor};
  padding: 10px 14px;
  transition: background-color 0.4s ease;
  outline: none;
  cursor: pointer;
  ${CssNoSelect}

  &:hover {
    background-color: ${props =>
      (props.theme.components.button.hover || props.theme.components.button)
        .backgroundColor};
  }

  &:active,
  &:hover:active {
    background-color: ${props => props.theme.colors.primaryActive};
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
