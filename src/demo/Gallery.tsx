import React, { useState, useEffect } from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import {
  PageHeader,
  PageHeaderContent
} from "../components-layout/PageHeader/PageHeader";
import { PageInfoBar, PageInfoBarContent } from "../components/PageInfoBar";
import { NavBar } from "../components/NavBar/NavBar";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { NavLinks } from "./shared/NavLinks";
import { Link } from "react-router-dom";

import { Footer } from "./shared/Footer";
import { useRouteMatch, useHistory } from "react-router-dom";
import { default as GalleryComp } from "react-photo-gallery";
import { toyshooterTheme } from "./theme";

import { FaImage } from "react-icons/fa"; // pick more icons here: https://react-icons.netlify.com/#/icons/fa

const galleryLookup: {
  [key: string]: { title: string; description: string };
} = {
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

export const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const route = useRouteMatch() as any;
  const history = useHistory() as any;

  const handleGalleryClick = (ev: any, galleryInfo: any) => {
    console.log(galleryInfo, galleryInfo.photo.src);
    /*
    const lastSlash = galleryInfo.photo.src.lastIndexOf("\\");
    const lastDot = galleryInfo.photo.src.lastIndexOf(".");
    const slug = galleryInfo.photo.src.substring(lastSlash + 1, lastDot);
    */
    //console.log(history, slug);
    history.push(
      `/photo/${galleryInfo.photo.gallery}/${galleryInfo.photo.slug}`
    );
  };

  const galleryInfo =
    galleryLookup[(route.params.galleryid as string) || "404"];

  useEffect(() => {
    (async () => {
      const galleryMetadataUrl = `/cdn/images/gallery/${route.params.galleryid}/reactphotogallery.json`;
      //console.log(galleryMetadataUrl);
      const photosResponse = await fetch(galleryMetadataUrl);
      const photosJson = await photosResponse.json();

      //console.log(photosJson);
      setPhotos(prev => photosJson);
    })();
  }, []);

  return (
    <>
      <PageHeaderWrapper
        backgroundImage={`/cdn/images/gallery/${route.params.galleryid}-header.jpg`}
      >
        <PageHeader>
          <NavBar background={toyshooterTheme.navBarFadeGradient}>
            <NavLinks />
          </NavBar>
        </PageHeader>
        <ResponsiveContainer centreContainer={true}>
          <PageHeaderContent>
            <h1>{galleryInfo.title}</h1>
            <p>{galleryInfo.description}</p>
          </PageHeaderContent>
        </ResponsiveContainer>
      </PageHeaderWrapper>
      <PageInfoBar>
        <ResponsiveContainer centreContainer={true}>
          <PageInfoBarContent>
            <h1>
              <span className={"crumb"}>Galleries</span> <FaImage />{" "}
              {galleryInfo.title}
            </h1>
          </PageInfoBarContent>
        </ResponsiveContainer>
      </PageInfoBar>

      <div>
        <GalleryComp photos={photos} onClick={handleGalleryClick} margin={0} />
      </div>

      <ResponsiveContainer
        centreContainer={true}
        style={{ flex: "1 0 auto" }}
      ></ResponsiveContainer>

      <Footer />
    </>
  );
};
