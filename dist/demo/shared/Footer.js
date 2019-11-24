import React from "react";
import { PageFooter, PageFooterIcon } from "../../components-layout/PageFooter/PageFooter";
import { ResponsiveContainer } from "../../components-layout/ResponsiveContainer";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

import { ToyShooter } from "../toyshooter";
import { Link } from "react-router-dom";
import styled from "styled-components";
const PageFooterStyled = styled(PageFooter)`
  background-image: linear-gradient(to bottom, #9a4ee1 0%, #8c55de 100%);
  background-repeat: repeat-x;
  color: #d6b5fc;

  a {
    color: white;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
export const Footer = () => React.createElement(PageFooterStyled, {
  "data-fsjsd-el": "PageFooter"
}, React.createElement(ResponsiveContainer, {
  centreContainer: true
}, React.createElement("div", {
  style: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "auto 250px"
  }
}, React.createElement("div", null, React.createElement(Link, {
  to: "/"
}, React.createElement(ToyShooter, {
  style: {
    maxWidth: 338
  }
})), React.createElement("p", null, "\xA9 2019. ", React.createElement(Link, {
  to: "/articles/terms"
}, "Terms"), " |", " ", React.createElement(Link, {
  to: "/articles/privacy"
}, "Privacy Policy"))), React.createElement("div", {
  style: {
    textAlign: "right"
  }
}, React.createElement("a", {
  href: "https://www.youtube.com/c/toyshooter",
  target: "_blank"
}, React.createElement(PageFooterIcon, null, React.createElement(FaYoutube, null))), React.createElement("a", {
  href: "https://www.instagram.com/weshoottoys/",
  target: "_blank"
}, React.createElement(PageFooterIcon, null, React.createElement(FaInstagram, null))), React.createElement("a", {
  href: "https://www.facebook.com/toyshooter/",
  target: "_blank"
}, React.createElement(PageFooterIcon, null, React.createElement(FaFacebook, null)))))));