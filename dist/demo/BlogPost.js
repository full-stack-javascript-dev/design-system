import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader, PageHeaderContent } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagList, TagComponent } from "../components/TagList";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { LayoutContentColumn, LayoutContentColumns } from "../components-layout/LayoutContentColumns";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";
import { H1, H4 } from "../components/Headings";
import { ContentList, ContentListItem } from "../components/ContentList";
import { Footer } from "./shared/Footer";
const TagLink = TagComponent(Link);
export const BlogPost = () => {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, {
    backgroundImage: "http://cdn.toyshooter.com/blog/img/compositintro-ts-header.jpg"
  }, React.createElement(PageHeader, null, React.createElement(NavBar, null, React.createElement(NavLinks, null))), React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageHeaderContent, null, React.createElement(TagList, null, React.createElement(TagLink, {
    to: "/"
  }, "Test")), React.createElement("h1", null, "Post Heading"), React.createElement("p", null, "Lead")))), React.createElement("div", null, React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, React.createElement(LayoutContentColumns, null, React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 2
    }
  }, React.createElement("div", null, React.createElement(H1, null, "Heading 1"), React.createElement("p", null, "Creating composits in Photoshop is time consuming but incredibly rewarding work."), React.createElement("p", null, "Compositing stretches your skills beyond photography and retouching into more artistic areas that will challenge you to create whatever you can dream up and are able to achieve in Photoshop."))), React.createElement(LayoutContentColumn, {
    style: {
      width: "300px"
    }
  }, React.createElement(H4, null, "Recent Posts"), React.createElement(ContentList, null, React.createElement(ContentListItem, null, React.createElement("a", {
    href: "/blog/post/how-to-completely-eliminate-camera-noise"
  }, "How To Completely Eliminate Camera Noise"), React.createElement("br", null), "Posted ", React.createElement("span", {
    className: "published"
  }, "08 Jun 2017")), React.createElement(ContentListItem, null, React.createElement("a", {
    href: "/blog/post/photoshop-compositing-tips"
  }, "Photoshop Compositing Tips"), React.createElement("br", null), "Posted ", React.createElement("span", {
    className: "published"
  }, "29 May 2017"))))))), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }), React.createElement(Footer, null));
};