import React, { useState, useEffect } from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader, PageHeaderContent } from "../components-layout/PageHeader/PageHeader";
import { PageInfoBar, PageInfoBarContent } from "../components/PageInfoBar";
import { NavBar } from "../components/NavBar/NavBar";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { NavLinks } from "./shared/NavLinks";
import { Footer } from "./shared/Footer";
import { useRouteMatch, useHistory } from "react-router-dom";
import { default as GalleryComp } from "react-photo-gallery";
import { toyshooterTheme } from "./theme";
import { FaImage } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

const galleryLookup = {
  scenes: {
    title: "Scenes",
    description: "In-camera toy photography work"
  },
  x: {
    title: "Scenes",
    description: "In-camera toy photography work"
  },
  "404": {
    title: "Uh oh",
    description: ""
  }
};
export const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const route = useRouteMatch();
  const history = useHistory();

  const handleGalleryClick = (ev, galleryInfo) => {
    console.log(galleryInfo, galleryInfo.photo.src);
    /*
    const lastSlash = galleryInfo.photo.src.lastIndexOf("\\");
    const lastDot = galleryInfo.photo.src.lastIndexOf(".");
    const slug = galleryInfo.photo.src.substring(lastSlash + 1, lastDot);
    */
    //console.log(history, slug);

    history.push(`/photo/${galleryInfo.photo.gallery}/${galleryInfo.photo.slug}`);
  };

  const galleryInfo = galleryLookup[route.params.galleryid || "404"];
  useEffect(() => {
    (async () => {
      const galleryMetadataUrl = `/cdn/images/gallery/${route.params.galleryid}/reactphotogallery.json`; //console.log(galleryMetadataUrl);

      const photosResponse = await fetch(galleryMetadataUrl);
      const photosJson = await photosResponse.json(); //console.log(photosJson);

      setPhotos(prev => photosJson);
    })();
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderWrapper, {
    backgroundImage: `/cdn/images/gallery/${route.params.galleryid}-header.jpg`
  }, React.createElement(PageHeader, null, React.createElement(NavBar, {
    background: toyshooterTheme.navBarFadeGradient
  }, React.createElement(NavLinks, null))), React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageHeaderContent, null, React.createElement("h1", null, galleryInfo.title), React.createElement("p", null, galleryInfo.description)))), React.createElement(PageInfoBar, null, React.createElement(ResponsiveContainer, {
    centreContainer: true
  }, React.createElement(PageInfoBarContent, null, React.createElement("h1", null, React.createElement("span", {
    className: "crumb"
  }, "Galleries"), " ", React.createElement(FaImage, null), " ", galleryInfo.title)))), React.createElement("div", null, React.createElement(GalleryComp, {
    photos: photos,
    onClick: handleGalleryClick,
    margin: 0
  })), React.createElement(ResponsiveContainer, {
    centreContainer: true,
    style: {
      flex: "1 0 auto"
    }
  }), React.createElement(Footer, null));
};