import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import {
  PageHeader,
  PageHeaderContent
} from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";
import { TagList, TagComponent } from "../components/TagList";
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

const TagLink = TagComponent(Link);

export const Galleries: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageHeader>
          <NavBar backgroundColor={"#3087de"}>
            <NavLinks />
          </NavBar>
        </PageHeader>
      </PageHeaderWrapper>

      <div>
        <ResponsiveContainer
          centreContainer={true}
          style={{ flex: "1 0 auto" }}
        >
          <LayoutContentColumns>
            <LayoutContentColumn style={{ flexGrow: 1 }}>
              <div>
                <p>Pic</p>
                <a href="/gallery/lightingstudies">
                  <H2>Heading 1</H2>
                </a>
                <p>Info</p>
              </div>
            </LayoutContentColumn>

            <LayoutContentColumn style={{ flexGrow: 1 }}>
              <div>
                <p>Pic</p>
                <a href="/gallery/scenes">
                  <H2>Heading 1</H2>
                </a>
                <p>Info</p>
              </div>
            </LayoutContentColumn>

            <LayoutContentColumn style={{ flexGrow: 1 }}>
              <div>
                <p>Pic</p>
                <a href="/gallery/compositions">
                  <H2>Heading 1</H2>
                </a>
                <p>Info</p>
              </div>
            </LayoutContentColumn>
          </LayoutContentColumns>
        </ResponsiveContainer>
      </div>

      <ResponsiveContainer
        centreContainer={true}
        style={{ flex: "1 0 auto" }}
      ></ResponsiveContainer>

      <Footer />
    </>
  );
};
