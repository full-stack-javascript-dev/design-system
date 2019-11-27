import styled, { createGlobalStyle } from "styled-components";

/* force React root element to fill viewport height */
export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
    height: 100%;
  }
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.428571429;
    color: ${props => props.theme.colors.text || "black"};
    background-color: ${props => props.theme.colors.body || "white"}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
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
