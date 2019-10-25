import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";
import ThemeVars from "../../ThemeVariables";

const StyledPageHeaderWrapper = styled.div<PageHeaderWrapperProps>`
  ${props =>
    typeof props.backgroundImage !== undefined &&
    css`
      background-image: url('${props.backgroundImage}')
    `}
  ${props =>
    props.coverImage &&
    css`
      background-position: center center;
      background-size: cover;
    `}
  ${props =>
    props.coverImageBlur &&
    css`
      position: relative;
      width: 100%;
    `}
`;

interface PageHeaderWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
  coverImage?: boolean;
  coverImageBlur?: boolean;
}

export const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledPageHeaderWrapper {...restProps}>{children}</StyledPageHeaderWrapper>
  );
};
