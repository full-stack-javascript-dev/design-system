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

interface CarouselPromoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CarouselPromo: React.FC<CarouselPromoProps> = ({
  children,
  ...restProps
}) => {
  return <StyledCarouselPromo {...restProps}>{children}</StyledCarouselPromo>;
};
