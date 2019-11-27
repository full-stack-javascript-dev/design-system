import React from "react";
import styled, { css } from "styled-components";
const InputStyled = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  background-color:#eee;
  border: solid 2px #ddd;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  padding-left:${props => props.theme.units.forms.padding + 6}px;
  padding-right:${props => props.theme.units.forms.padding + 6}px;
  padding-top: ${props => props.theme.units.forms.padding}px;
  padding-bottom: ${props => props.theme.units.forms.padding}px;
  font-size:16px;

  &:hover {
    background-color:#eee;
    border: solid 2px #bbb;
  }
  &:focus {
    background-color: #fff;
    border: solid 2px #bbb;
    color:black;
  }
`;
const TextareaStyled = styled.textarea`
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px #bbb;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  padding: 7px 9px;

  &:focus {
    background-color: #fff;
    border: solid 1px #aaa;
  }
  &:hover {
    border: solid 1px rgb(109, 183, 239);
  }

  ${props => props.width && css`
      width: ${props.width};
    `}

  ${props => props.height && css`
      height: ${props.height};
    `}
`;
export const Input = props => {
  return React.createElement(InputStyled, props);
};
export const Textarea = props => {
  return React.createElement(TextareaStyled, props);
};