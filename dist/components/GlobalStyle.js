import { createGlobalStyle } from "styled-components";
/* force React root element to fill viewport height */

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
  body {
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.428571429;
    color: ${props => props.theme.colors.text || "black"};
    background-color: ${props => props.theme.colors.body || "white"}
  }
  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
  }
  a:hover, a:focus {
    color: ${props => props.theme.colors.linkHover};
    text-decoration: underline;
  }
`;