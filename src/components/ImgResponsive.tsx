import React from "react";
import styled from "styled-components";

export const ImgResponsiveStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  ${(props: ImgResponsiveProps) =>
    props.border && `border: solid 1px rgba(0,0,0,0.3);`}
  ${(props: ImgResponsiveProps) =>
    props.shadow && `box-shadow: 0 -5px 15px 0 rgba(0,0,0,0.2);`}
  ${(props: ImgResponsiveProps) =>
    props.onClick &&
    `cursor: pointer; 
    transition:ease opacity 0.3s;
    &:hover{
      opacity:0.7;
    }`}
`;

interface ImgResponsiveProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean;
  shadow?: boolean;
}

export const ImgResponsive: React.FC<ImgResponsiveProps> = ({
  border,
  shadow,
  ...props
}) => {
  return <ImgResponsiveStyled border={border} shadow={shadow} {...props} />;
};
