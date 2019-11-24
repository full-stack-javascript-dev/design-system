import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagComponent } from "../components/TagList";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { LayoutContentColumn, LayoutContentColumns } from "../components-layout/LayoutContentColumns";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";
import { H1, H4 } from "../components/Headings";
import { Footer } from "./shared/Footer";
const TagLink = TagComponent(Link);
export const Blog = () => {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, null, React.createElement(PageHeader, null, React.createElement(NavBar, null, React.createElement(NavLinks, null)))), React.createElement("div", null, React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, React.createElement(LayoutContentColumns, null, React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 2
    }
  }, React.createElement("div", null, React.createElement(H1, null, "Blog"), React.createElement("p", null, "TODO"))), React.createElement(LayoutContentColumn, {
    style: {
      width: "300px"
    }
  }, React.createElement(H4, null, "Recent Posts"), React.createElement("p", null, "Stuff"))))), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }), React.createElement(Footer, null));
};