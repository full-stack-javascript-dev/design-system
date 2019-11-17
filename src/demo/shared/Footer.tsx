import React from "react";

import {
  PageFooter,
  PageFooterIcon
} from "../../components-layout/PageFooter/PageFooter";
import { ResponsiveContainer } from "../../components-layout/ResponsiveContainer";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa
import { ToyShooter } from "../toyshooter";

export const Footer = () => (
  <PageFooter
    data-fsjsd-el="PageFooter"
    style={{
      backgroundImage: "linear-gradient(to bottom,#9a4ee1 0%,#8c55de 100%)",
      backgroundRepeat: "repeat-x",
      color: "#d6b5fc"
    }}
  >
    <ResponsiveContainer centreContainer={true}>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "auto 200px"
        }}
      >
        <ToyShooter style={{ maxWidth: 338 }} />
        <div style={{ textAlign: "right" }}>
          <PageFooterIcon>
            <FaYoutube />
          </PageFooterIcon>
          <PageFooterIcon>
            <FaInstagram />
          </PageFooterIcon>
          <PageFooterIcon>
            <FaFacebook />
          </PageFooterIcon>
        </div>
      </div>
    </ResponsiveContainer>
  </PageFooter>
);
