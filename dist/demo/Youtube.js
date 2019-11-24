import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { NavLinks } from "./shared/NavLinks";
export const Youtube = () => {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, {
    backgroundColor: "#777"
  }, React.createElement(PageHeader, null, React.createElement(NavBar, null, React.createElement(NavLinks, null))), React.createElement("div", null, "After header")));
};