import styled, { css } from "styled-components";
const baseHeader = css`
  color: ${props => props.theme.colors.heading || props.theme.colors.primary};
  margin-top: 0;
  letter-spacing: -0.7pt;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 600;
  line-height: 1.1;
`;
export const H1 = styled.h1`
  ${baseHeader}
  letter-spacing: -2pt;
`;
export const H2 = styled.h2`
  ${baseHeader}
`;
export const H3 = styled.h3`
  ${baseHeader}
`;
export const H4 = styled.h4`
  ${baseHeader}
  letter-spacing: -0.5pt;
  margin-top: 11px;
  margin-bottom: 11px;
  font-size: 20px;
`;