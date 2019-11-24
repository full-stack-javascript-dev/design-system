import React, { useRef } from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader, PageHeaderContent } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagComponent } from "../components/TagList";
import { ImgResponsive } from "../components/ImgResponsive";
import { PageInfoBar, PageInfoBarContent } from "../components/PageInfoBar";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { LayoutContentColumn, LayoutContentColumns } from "../components-layout/LayoutContentColumns";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";
import { CanvasBlur } from "../components/CanvasBlur";
import { Footer } from "./shared/Footer";
import { useRouteMatch } from "react-router-dom";
import { canvasRGBA } from "stackblur-canvas";
import { toyshooterTheme } from "./theme";
import { FaImage } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

const TagLink = TagComponent(Link); // Change this value to adjust the amount of blur

const BLUR_RADIUS = 100;
export const GalleryPhoto = () => {
  const route = useRouteMatch(); //console.log(route.params);

  const imgPathMedium = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_medium.jpg`;
  const imgPathLarge = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_large.jpg`;
  const imgPathBlur = `/cdn/images/gallery/${route.params.galleryid}/${route.params.photoid}_blurbg.jpg`;
  const blurImgRef = useRef(null);
  const blurCanvasRef = useRef(null);

  const blurImgLoaded = () => {
    const canvasEl = blurCanvasRef.current;
    const blurImg = blurImgRef.current;
    if (!canvasEl || !blurImg) return;
    const canvasContext = canvasEl.getContext("2d");
    if (!canvasContext || !blurImg) return; //console.log(canvasContext, blurImgRef.current);

    const w = canvasContext.canvas.width;
    const h = canvasContext.canvas.height;
    canvasContext.drawImage(blurImg, 0, 0, w, h);
    canvasRGBA(canvasContext.canvas, 0, 0, w, h, BLUR_RADIUS);
  };

  const handleImageClick = () => {
    window.alert(imgPathLarge);
  };

  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, {
    style: {
      position: "relative"
    }
  }, React.createElement(CanvasBlur, {
    ref: blurCanvasRef,
    width: "200",
    height: "200",
    id: "heroCanvas"
  }), React.createElement("img", {
    ref: blurImgRef,
    onLoad: blurImgLoaded,
    "data-canvas-image": true,
    style: {
      display: "none"
    },
    src: imgPathBlur
  }), React.createElement(PageHeader, null, React.createElement(NavBar, {
    background: toyshooterTheme.navBarFadeGradient
  }, React.createElement(NavLinks, null))), React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageHeaderContent, {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, React.createElement(ImgResponsive, {
    border: true,
    shadow: true,
    src: imgPathMedium,
    onClick: handleImageClick
  })))), React.createElement(PageInfoBar, null, React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageInfoBarContent, null, React.createElement("h1", null, React.createElement("span", {
    className: "crumb"
  }, "Photo"), " ", React.createElement(FaImage, null), " Wanted")))), React.createElement("div", null, React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, React.createElement(LayoutContentColumns, null, React.createElement(LayoutContentColumn, {
    style: {
      flexGrow: 1
    }
  }, "Gallery Photo")))), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }, "Content"), React.createElement(Footer, null));
};