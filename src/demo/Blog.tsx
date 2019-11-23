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

export const Blog: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageHeader>
          <NavBar>
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
            <LayoutContentColumn style={{ flexGrow: 2 }}>
              <div>
                <H1>Blog</H1>

                <p>TODO</p>
              </div>
            </LayoutContentColumn>
            <LayoutContentColumn style={{ width: "300px" }}>
              <H4>Recent Posts</H4>
              <p>Stuff</p>
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
