import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";

const ButtonTextStyled = styled.button`
  color: rgb(0, 127, 224);
  background: none;
  border: none;
  padding: 10px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  ${CssNoSelect}

  &:hover {
    color: white;
    background-color: rgb(13, 150, 255);
  }

  &:active,
  &:hover:active {
    color: white;
    background-color: rgb(0, 98, 173);
  }
`;

interface ButtonTextProps extends React.ButtonHTMLAttributes<any> {
  children: any;
}

export const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  ...restProps
}) => {
  return <ButtonTextStyled {...restProps}>{children}</ButtonTextStyled>;
};
