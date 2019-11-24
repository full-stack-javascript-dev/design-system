import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagComponent } from "../components/TagList";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { LayoutContentColumn, LayoutContentColumns } from "../components-layout/LayoutContentColumns";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";
import { H2 } from "../components/Headings";
import { Footer } from "./shared/Footer";
const TagLink = TagComponent(Link);
export const Galleries = () => {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, null, React.createElement(PageHeader, null, React.createElement(NavBar, {
    backgroundColor: "#3087de"
  }, React.createElement(NavLinks, null)))), React.createElement("div", null, React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, React.createElement(LayoutContentColumns, null, React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 1
    }
  }, React.createElement("div", null, React.createElement("p", null, "Pic"), React.createElement("a", {
    href: "/gallery/lightingstudies"
  }, React.createElement(H2, null, "Lighting Studies")), React.createElement("p", null, "Info"))), React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 1
    }
  }, React.createElement("div", null, React.createElement("p", null, "Pic"), React.createElement("a", {
    href: "/gallery/scenes"
  }, React.createElement(H2, null, "Scenes")), React.createElement("p", null, "Info"))), React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 1
    }
  }, React.createElement("div", null, React.createElement("p", null, "Pic"), React.createElement("a", {
    href: "/gallery/compositions"
  }, React.createElement(H2, null, "Compositions")), React.createElement("p", null, "Info")))))), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }), React.createElement(Footer, null));
};