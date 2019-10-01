import React from "react";
import styled, { css } from "styled-components";

const FormWrapperStyled = styled.div`
  padding: 20px;
  ${(props: FormWrapperProps) =>
    props.overlay &&
    css`
      background-color: white;
    `}
  ${(props: FormWrapperProps) =>
    props.emphasis &&
    css`
      border: solid 1px #ddd;
    `}
`;

interface FormWrapperProps extends React.HTMLAttributes<any> {
  children: any;
  overlay?: boolean;
  emphasis?: boolean;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  ...restProps
}) => {
  return <FormWrapperStyled {...restProps}>{children}</FormWrapperStyled>;
};

interface FormControlProps extends React.HTMLAttributes<any> {
  children: any;
  noOffsetBottom?: boolean;
}

const FormControlStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  ${(props: FormControlProps) =>
    props.noOffsetBottom &&
    css`
      margin-bottom: 0px;
    `}
`;

export const FormControl: React.FC<FormControlProps> = ({
  children,
  ...restProps
}) => {
  return <FormControlStyled {...restProps}>{children}</FormControlStyled>;
};

interface FormLabelProps extends React.HTMLAttributes<any> {
  children?: any;
}

const FormLabelStyled = styled.div`
  min-width: 220px;
  padding: 7px 9px;
  ${(props: FormLabelProps) => css``}
`;

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  ...restProps
}) => {
  return <FormLabelStyled {...restProps}>{children}</FormLabelStyled>;
};

interface FormElementProps extends React.HTMLAttributes<any> {
  children?: any;
}

const FormElementStyled = styled.div`
  ${(props: FormElementProps) => css``}
`;

export const FormElement: React.FC<FormElementProps> = ({
  children,
  ...restProps
}) => {
  return <FormElementStyled {...restProps}>{children}</FormElementStyled>;
};
