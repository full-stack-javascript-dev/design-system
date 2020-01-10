import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";

const TagStyled = baseElement => styled(baseElement)`
  padding: 4px 10px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  font-family: Arial, Helvetica;
  text-decoration: none;
  text-shadow: none;
  border-radius: 2px;
  ${props => css`
      background-color: ${props.backgroundColor || "#555"};
      color: ${props.color || "#FFF"};

      &:hover,
      &:active,
      &:hover:active {
        background-color: ${lighten(0.2, props.backgroundColor || "#000")};
        color: ${props.color || "#FFF"};
      }
    `}
`;

const TagListStyled = styled.div`
  & > * {
    margin-right: 4px;
    margin-bottom: 8px;
  }
`;
export const Tag = props => {
  const TagActual = TagStyled("div");
  return React.createElement(TagActual, props, props.children);
};
export const TagComponent = component => props => {
  const TagActual = TagStyled(component);
  return React.createElement(TagActual, props, props.children);
};
export const TagList = props => {
  return React.createElement(TagListStyled, props, props.children);
};