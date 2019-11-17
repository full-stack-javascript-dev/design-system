import React from "react";
import styled, { css } from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";

const StyledPageHeaderWrapper = styled.div<PageHeaderWrapperProps>`
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  ${props =>
    typeof props.backgroundImage !== undefined &&
    css`
      background-image: url('${props.backgroundImage}');
      background-position: center center;
      background-size: cover;
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
  backgroundColor?: string;
  coverImage?: boolean;
  coverImageBlur?: boolean;
}

export const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledPageHeaderWrapper data-fsjsd-el="PageHeaderWrapper" {...restProps}>
      {children}
    </StyledPageHeaderWrapper>
  );
};
