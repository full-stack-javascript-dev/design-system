import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      heading: string;
      button: string;
    };
    colors: {
      body?: string;
      text?: string;
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
    units:{
      forms:{
        padding:number,
        fontSize:number,
      }
    }
  }
}
