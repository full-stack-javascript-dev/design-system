import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      heading: string;
    };
    colors: {
      text: string;
      heading?: string;
      primary: string;
      primaryActive: string;
      link: string;
      linkHover: string;
    };
    components: {
      button: {
        textColor: string;
        backgroundColor: string;
        hover?: {
          backgroundColor: string;
        };
      };
    };
  }
}
