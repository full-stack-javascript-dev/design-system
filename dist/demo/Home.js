import React from "react";
import { Button } from "../components/Button";
import { CarouselPromo } from "../components/Carousel";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { NavBar } from "../components/NavBar/NavBar";
import { H1, H2, H3 } from "../components/Headings";
import { NavLinks } from "./shared/NavLinks";
import { Footer } from "./shared/Footer";
export const Home = () => {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, null, React.createElement(PageHeader, null, React.createElement(NavBar, {
    backgroundColor: "#3087de"
  }, React.createElement(NavLinks, null)))), false && React.createElement("div", {
    style: {
      backgroundColor: "#000"
    }
  }, React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(CarouselPromo, {
    style: {
      color: "#FFF"
    }
  }, React.createElement(React.Fragment, null, React.createElement("div", {
    className: "lead"
  }, "Join our email newsletter and get our free"), React.createElement("h2", null, "EBOOK"), React.createElement("div", null, React.createElement(Button, null, "test")))))), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, React.createElement("div", null, React.createElement(H1, null, "FSJSD Design System"), React.createElement("p", null, "para"), React.createElement(H2, null, "Heading 2"), React.createElement("p", null, "para"), React.createElement(H3, null, "Heading 3"), React.createElement("p", null, "para"), React.createElement("p", null, React.createElement(Button, null, "test")))), React.createElement(Footer, null));
};
export default Home;