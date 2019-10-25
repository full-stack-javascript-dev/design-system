import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../utils/StyleMixins";
import { MdAdd } from "react-icons/md";

const ButtonRoundStyled = styled.button`
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 26px;
  padding: 10px;
  font-weight: bold;
  background-color: rgb(0, 127, 224);
  transition: background-color 0.4s ease;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid rgb(0, 127, 224);
  outline: none;
  cursor: pointer;
  ${CssNoSelect}

  transform: scale(0.8) translate(-66px, 10px);
  position: absolute;
  width: 48px;
  height: 48px;

  &:hover {
    background-color: rgb(13, 150, 255);
  }

  &:active,
  &:hover:active {
    background-color: rgb(0, 98, 173);
  }
`;

interface ButtonRoundProps extends React.ButtonHTMLAttributes<any> {
  children: any;
}

export const ButtonRound: React.FC<ButtonRoundProps> = ({
  children,
  ...restProps
}) => {
  return <ButtonRoundStyled {...restProps}>{children}</ButtonRoundStyled>;
};

export const ButtonRoundAdd: React.FC<React.ButtonHTMLAttributes<any>> = ({
  ...restProps
}) => {
  return (
    <ButtonRoundStyled {...restProps}>
      <MdAdd></MdAdd>
    </ButtonRoundStyled>
  );
};
