import React from "react";
import styled, { ThemedStyledProps, DefaultTheme } from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

const sizeOffset = (size:string) => {
  return ({
    small:-2,
    medium:2,
    large:12
  } as any)[size]
}

const fontOffset = (size:string) => {
  return ({
    small:-1,
    medium:0,
    large:6
  } as any)[size]
}

const basePadding = (props: any) => {
  return props.theme.units.forms.padding + sizeOffset(props.size)
}

const baseFont = (props: any) => {
  return props.theme.units.forms.fontSize + fontOffset(props.size)
}

const StyledButton = styled.button<ButtonProps>`
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
    background-color: ${props =>
      (props.theme.components.button.hover || props.theme.components.button)
        .backgroundColor};
  }

  &:active,
  &:hover:active {
    //padding-top: 15px;
    //padding-bottom: 9px;
    box-shadow: 0 3px 0 rgba(0,0,0,0.2) inset;
    background-color: ${props => props.theme.colors.primaryActive};
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  size?: 'small' | 'medium' | 'large',
  block?: boolean;
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({ size = 'medium', block = false, children, ...restProps }) => {
  return <StyledButton size={size} block={block} {...restProps}>{children}</StyledButton>;
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
