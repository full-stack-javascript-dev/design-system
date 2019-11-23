import React, { useEffect, useRef } from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import {
  PageHeader,
  PageHeaderContent
} from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagList, TagComponent } from "../components/TagList";
import { ImgResponsive } from "../components/ImgResponsive";
import { PageInfoBar, PageInfoBarContent } from "../components/PageInfoBar";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import {
  LayoutContentColumn,
  LayoutContentColumns
} from "../components-layout/LayoutContentColumns";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";
import { H1, H2, H3, H4 } from "../components/Headings";
import { ContentList, ContentListItem } from "../components/ContentList";

import { Footer } from "./shared/Footer";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { canvasRGBA } from "stackblur-canvas";
import { toyshooterTheme } from "./theme";

import { FaImage } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

const TagLink = TagComponent(Link);

const CanvasBlur = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

// Change this value to adjust the amount of blur
const BLUR_RADIUS = 100;

export const GalleryPhoto: React.FC = () => {
  const route = useRouteMatch() as any;
  //console.log(route.params);

  const imgPathMedium = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_medium.jpg`;
  const imgPathLarge = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_large.jpg`;
  const imgPathBlur = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_blurbg.jpg`;

  const blurImgRef = useRef(null);
  const blurCanvasRef = useRef<HTMLCanvasElement>(null);

  const blurImgLoaded = () => {
    const canvasEl = blurCanvasRef.current;
    const blurImg = blurImgRef.current;

    if (!canvasEl || !blurImg) return;

    const canvasContext = canvasEl.getContext("2d");

    if (!canvasContext || !blurImg) return;

    //console.log(canvasContext, blurImgRef.current);

    const w = canvasContext.canvas.width;
    const h = canvasContext.canvas.height;
    canvasContext.drawImage(blurImg, 0, 0, w, h);
    canvasRGBA(canvasContext.canvas, 0, 0, w, h, BLUR_RADIUS);
  };

  const handleImageClick = () => {
    window.alert(imgPathLarge);
  };

  return (
    <>
      <PageHeaderWrapper style={{ position: "relative" }}>
        <CanvasBlur
          ref={blurCanvasRef}
          width="200"
          height="200"
          id="heroCanvas"
        ></CanvasBlur>
        <img
          ref={blurImgRef}
          onLoad={blurImgLoaded}
          data-canvas-image
          style={{ display: "none" }}
          src={imgPathBlur}
        />
        <PageHeader>
          <NavBar background={toyshooterTheme.navBarFadeGradient}>
            <NavLinks />
          </NavBar>
        </PageHeader>
        <ResponsiveContainer centreContainer={true}>
          <PageHeaderContent
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ImgResponsive
              border
              shadow
              src={imgPathMedium}
              onClick={handleImageClick}
            />
          </PageHeaderContent>
        </ResponsiveContainer>
      </PageHeaderWrapper>
      <PageInfoBar>
        <ResponsiveContainer centreContainer={true}>
          <PageInfoBarContent>
            <h1>
              <span className={"crumb"}>Photo</span> <FaImage /> Wanted
            </h1>
          </PageInfoBarContent>
        </ResponsiveContainer>
      </PageInfoBar>

      <div>
        <ResponsiveContainer
          centreContainer={true}
          style={{ flex: "1 0 auto" }}
        >
          <LayoutContentColumns>
            <LayoutContentColumn style={{ flexGrow: 1 }}>
              Gallery Photo
            </LayoutContentColumn>
          </LayoutContentColumns>
        </ResponsiveContainer>
      </div>
      <ResponsiveContainer centreContainer={true} style={{ flex: "1 0 auto" }}>
        Content
      </ResponsiveContainer>

      <Footer />
    </>
  );
};
