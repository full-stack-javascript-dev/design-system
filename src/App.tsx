import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";
import {
  GlobalStyle,
  NavBar,
  PageHeaderWrapper,
  PageHeader, 
  PageHeaderContent,
  ResponsiveContainer,
  TagList,
  Tag
} from "./exports";

const App: React.FC = () => {
  return (<ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      <PageHeaderWrapper
        backgroundImage={
          `/cdn/images/blog/creating-forced-perspective-in-your-photos-ts-header.jpg`
        }
      >
        <PageHeader>
          <NavBar>
            <TagList>
              <Tag>Blah</Tag>
            </TagList>
            <a href="/">Test</a>
          </NavBar>
        </PageHeader>
        <ResponsiveContainer centreContainer={true}>
          <PageHeaderContent>
            <TagList>
              <a href="/">Test</a>
            </TagList>
            <div style={{textShadow:'rgba(107, 107, 107, 0.4) 0px 0px 10px'}}>
              <h1>Post title</h1>
              <p>Excerpt</p>
            </div>
          </PageHeaderContent>
        </ResponsiveContainer>
      </PageHeaderWrapper>
      </>
    </ThemeProvider>)
;
};

export default App;
