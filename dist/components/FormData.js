import React from "react";
import styled, { css } from "styled-components";
const FormWrapperStyled = styled.div`
  padding: 20px;
  ${props => props.overlay && css`
      background-color: white;
    `}
  ${props => props.emphasis && css`
      border: solid 1px #ddd;
    `}
`;
export const FormWrapper = ({
  children,
  ...restProps
}) => {
  return React.createElement(FormWrapperStyled, restProps, children);
};
const FormControlStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  ${props => props.noOffsetBottom && css`
      margin-bottom: 0px;
    `}
`;
export const FormControl = ({
  children,
  ...restProps
}) => {
  return React.createElement(FormControlStyled, restProps, children);
};
const FormLabelStyled = styled.div`
  min-width: 220px;
  padding: 7px 9px;
  ${props => css``}
`;
export const FormLabel = ({
  children,
  ...restProps
}) => {
  return React.createElement(FormLabelStyled, restProps, children);
};
const FormElementStyled = styled.div`
  ${props => css``}
`;
export const FormElement = ({
  children,
  ...restProps
}) => {
  return React.createElement(FormElementStyled, restProps, children);
};