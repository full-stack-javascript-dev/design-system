import React from "react";
import styled from "styled-components";
import { NavBarLogo, NavBarMenu, NavBarMenuItemComponent } from "../../components/NavBar/NavBar";
import { ResponsiveContainer } from "../../components-layout/ResponsiveContainer";
import { Link } from "react-router-dom";
import { ToyShooter } from "../toyshooter";
const MyNavBarLogo = styled.div`
  padding: 14px 10px;
`; // don't declare inside render! This is a FUNCTION to
// return a styled link NOT the resulting JSX Element

const NavBarLink = NavBarMenuItemComponent(Link);
export const NavLinks = () => {
  return React.createElement(ResponsiveContainer, {
    "data-fsjsd-el": "NavLinks",
    centreContainer: true,
    style: {
      height: 61
    }
  }, React.createElement(NavBarLogo, {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, React.createElement(ToyShooter, {
    style: {
      maxWidth: 150
    },
    color: "#44d6ff"
  })), React.createElement(NavBarMenu, null, React.createElement(NavBarLink, {
    to: "/"
  }, "Home"), React.createElement(NavBarLink, {
    to: "/youtube"
  }, "Youtube"), React.createElement(NavBarLink, {
    to: "/galleries"
  }, "Gallery"), React.createElement(NavBarLink, {
    to: "/blog"
  }, "Blog")));
};