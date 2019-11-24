import React from "react";
import styled from "styled-components";
const StyledCarouselPromo = styled.div`
  padding: 60px 0;
  .lead {
    margin-bottom: 0;
    font-size: 28px;
    letter-spacing: -1pt;
  }
  h2 {
    letter-spacing: -2pt;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 46px;
  }
`;
export const CarouselPromo = ({
  children,
  ...restProps
}) => {
  return React.createElement(StyledCarouselPromo, restProps, children);
};