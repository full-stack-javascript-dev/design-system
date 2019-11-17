import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fonts: {
    primary: "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif",
    heading: "Montserrat, sans serif"
  },
  colors: {
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

export { theme };
