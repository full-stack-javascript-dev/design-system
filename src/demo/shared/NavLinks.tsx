import React from "react";
import styled from "styled-components";
import {
  NavBar,
  NavBarLogo,
  NavBarMenu,
  NavBarMenuItem,
  NavBarMenuItemComponent
} from "../../components/NavBar/NavBar";
import { ResponsiveContainer } from "../../components-layout/ResponsiveContainer";
import { Link } from "react-router-dom";
import { ToyShooter } from "../toyshooter";

const MyNavBarLogo = styled.div`
  padding: 14px 10px;
`;

// don't declare inside render! This is a FUNCTION to
// return a styled link NOT the resulting JSX Element
const NavBarLink = NavBarMenuItemComponent(Link);

export const NavLinks: React.FC = () => {
  return (
    <ResponsiveContainer
      data-fsjsd-el="NavLinks"
      centreContainer={true}
      style={{ height: 61 }}
    >
      <NavBarLogo
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <ToyShooter style={{ maxWidth: 150 }} color={"#44d6ff"} />
      </NavBarLogo>
      <NavBarMenu>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/youtube">Youtube</NavBarLink>
        <NavBarLink to="/gallery">Gallery</NavBarLink>
        <NavBarLink to="/blogpost">Blog</NavBarLink>
      </NavBarMenu>
    </ResponsiveContainer>
  );
};
