import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/theme";
import { GlobalStyle, NavBar, PageHeaderWrapper, PageHeader, PageHeaderContent, ResponsiveContainer, TagList, Tag } from "./exports";

const App = () => {
  return React.createElement(ThemeProvider, {
    theme: defaultTheme
  }, React.createElement(React.Fragment, null, React.createElement(GlobalStyle, null), React.createElement(PageHeaderWrapper, {
    backgroundImage: `/cdn/images/blog/creating-forced-perspective-in-your-photos-ts-header.jpg`
  }, React.createElement(PageHeader, null, React.createElement(NavBar, null, React.createElement(TagList, null, React.createElement(Tag, null, "Blah")), React.createElement("a", {
    href: "/"
  }, "Test"))), React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageHeaderContent, null, React.createElement(TagList, null, React.createElement("a", {
    href: "/"
  }, "Test")), React.createElement("div", {
    style: {
      textShadow: 'rgba(107, 107, 107, 0.4) 0px 0px 10px'
    }
  }, React.createElement("h1", null, "Post title"), React.createElement("p", null, "Excerpt")))))));
};

export default App;