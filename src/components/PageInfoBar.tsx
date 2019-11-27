import React from "react";
import styled from "styled-components";

export const PageInfoBarStyled = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(58, 67, 75, 0.15);
`;

interface PageInfoBarProps extends React.HTMLAttributes<any> {}

export const PageInfoBar: React.FC<PageInfoBarProps> = ({ children }) => {
  return <PageInfoBarStyled>{children}</PageInfoBarStyled>;
};

export const PageInfoBarContentStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  line-height: 38px;
  padding: 0;
  min-height: 65px;
  align-items: center;

  h1 {
    font-family: "Montserrat", "sans serif";
    letter-spacing: -1pt;
    font-size: 28px;
    font-weight: 500;
    margin: 0;
    color: #0b52b5;
    display: flex;
    align-items: center;

    span {
      &.crumb {
        font-weight: 600;
        color: #4fafea;
        padding-right: 15px;
        border-right: solid 1px #4fafea;
        margin-right: 15px;
      }
    }

    svg {
      margin-right: 15px;
    }
  }
`;

interface PageInfoBarContentProps extends React.HTMLAttributes<any> {}

export const PageInfoBarContent: React.FC<PageInfoBarContentProps> = ({
  children
}) => {
  return <PageInfoBarContentStyled>{children}</PageInfoBarContentStyled>;
};
