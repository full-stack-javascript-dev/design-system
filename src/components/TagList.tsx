import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";

const TagStyled = (baseElement: any) => styled(baseElement)`
  padding: 4px 10px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  font-family: Arial, Helvetica;
  text-decoration: none;
  text-shadow: none;
  border-radius: 2px;
  ${(props: TagProps) =>
    css`
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

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  color?: string;
}

export const Tag: React.FC = (props: TagProps) => {
  const TagActual = TagStyled("div");
  return <TagActual {...props}>{props.children}</TagActual>;
};

export const TagComponent = (
  component: React.ReactNode
): React.FC<any> => props => {
  const TagActual = TagStyled(component);
  return <TagActual {...props}>{props.children}</TagActual>;
};

export const TagList: React.FC = (
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  return <TagListStyled {...props}>{props.children}</TagListStyled>;
};
