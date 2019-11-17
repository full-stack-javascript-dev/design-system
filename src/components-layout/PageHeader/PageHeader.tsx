import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";
import { CssNoSelect } from "../../utils/StyleMixins";

const StyledPageHeader = styled.div<PageHeaderProps>`
  display: flex;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
  backgroundColor?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  backgroundColor,
  ...restProps
}) => {
  return (
    <StyledPageHeader
      data-fsjsd-el="PageHeader"
      backgroundColor={backgroundColor}
      {...restProps}
    >
      {children}
    </StyledPageHeader>
  );
};

const StyledPageHeaderContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  h1 {
    font-family: Montserrat, sans serif;
    font-weight: 700;
    line-height: 1.1;
    color: #fff;
    letter-spacing: -2pt;
    font-size: 42px;
    margin-top: 22px;
    margin-bottom: 11px;
  }

  p {
    color: #fff;
    margin: 0 0 11px;
    font-size: 20px;
  }
`;

export const PageHeaderContent: React.FC<any> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledPageHeaderContent data-fsjsd-el="PageHeaderContent" {...restProps}>
      {children}
    </StyledPageHeaderContent>
  );
};
