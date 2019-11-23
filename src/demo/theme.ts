import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fonts: {
    primary: "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
    heading: "Montserrat, sans serif"
  },
  colors: {
    body: "#f4f4f9",
    text: "#444",
    heading: "#3d698e",
    primary: "rgb(0, 127, 224)",
    primaryActive: "rgb(0, 98, 173)",
    link: "#337ab7",
    linkHover: "#23527c"
  },
  components: {
    button: {
      textColor: "white",
      backgroundColor: "rgb(0, 127, 224)",
      hover: {
        backgroundColor: "rgb(13, 150, 255)"
      }
    }
  }
};

const toyshooterTheme = {
  navBarFadeGradient:
    "linear-gradient(to bottom,rgba(5,117,193,0.7) 0%,rgba(48,135,222,0) 100%);"
};

export { theme, toyshooterTheme };
