import React from "react";
import styled from "styled-components";
import { CssNoSelect } from "../../utils/StyleMixins";

const StyledPageFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 30px 0;
`;

interface PageFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageFooter: React.FC<PageFooterProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledPageFooter data-fsjsd-el="PageFooter" {...restProps}>
      {children}
    </StyledPageFooter>
  );
};

const StyledPageFooterIcon = styled.div`
  display: inline-block;
  svg {
    color: white;
    font-size: 3rem;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
`;

export const PageFooterIcon: React.FC = ({
  children
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledPageFooterIcon>{children}</StyledPageFooterIcon>
);

interface PageFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageFooterIconGroup: React.FC = ({
  children
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledPageFooterIcon>{children}</StyledPageFooterIcon>
);
