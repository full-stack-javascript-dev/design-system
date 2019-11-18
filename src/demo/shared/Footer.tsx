import React from "react";

import {
  PageFooter,
  PageFooterIcon
} from "../../components-layout/PageFooter/PageFooter";
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

export const Footer = () => (
  <PageFooterStyled data-fsjsd-el="PageFooter">
    <ResponsiveContainer centreContainer={true}>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "auto 250px"
        }}
      >
        <div>
          <Link to="/">
            <ToyShooter style={{ maxWidth: 338 }} />
          </Link>
          <p>
            © 2019. <Link to="/articles/terms">Terms</Link> |{" "}
            <Link to="/articles/privacy">Privacy Policy</Link>
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <a href="https://www.youtube.com/c/toyshooter" target="_blank">
            <PageFooterIcon>
              <FaYoutube />
            </PageFooterIcon>
          </a>
          <a href="https://www.instagram.com/weshoottoys/" target="_blank">
            <PageFooterIcon>
              <FaInstagram />
            </PageFooterIcon>
          </a>
          <a href="https://www.facebook.com/toyshooter/" target="_blank">
            <PageFooterIcon>
              <FaFacebook />
            </PageFooterIcon>
          </a>
        </div>
      </div>
    </ResponsiveContainer>
  </PageFooterStyled>
);
