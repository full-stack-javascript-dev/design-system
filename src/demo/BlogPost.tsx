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

import { Footer } from "./shared/Footer";
import styled from "styled-components";

const TagLink = TagComponent(Link);

export const BlogPost: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper
        backgroundImage={
          "http://cdn.toyshooter.com/blog/img/compositintro-ts-header.jpg"
        }
      >
        <PageHeader>
          <NavBar>
            <NavLinks />
          </NavBar>
        </PageHeader>
        <ResponsiveContainer centreContainer={true}>
          <PageHeaderContent>
            <TagList>
              <TagLink to="/">Test</TagLink>
            </TagList>
            <h1>Post Heading</h1>
            <p>Lead</p>
          </PageHeaderContent>
        </ResponsiveContainer>
      </PageHeaderWrapper>

      <div>
        <ResponsiveContainer
          centreContainer={true}
          style={{ flex: "1 0 auto" }}
        >
          <LayoutContentColumns>
            <LayoutContentColumn style={{ flexGrow: 2 }}>
              <div>
                <H1>Heading 1</H1>

                <p>
                  Creating composits in Photoshop is time consuming but
                  incredibly rewarding work.
                </p>

                <p>
                  Compositing stretches your skills beyond photography and
                  retouching into more artistic areas that will challenge you to
                  create whatever you can dream up and are able to achieve in
                  Photoshop.
                </p>
              </div>
            </LayoutContentColumn>
            <LayoutContentColumn style={{ width: "200px" }}>
              <H4>Recent Posts</H4>
              <ContentList>
                <ContentListItem>
                  <a href="/blog/post/how-to-completely-eliminate-camera-noise">
                    How To Completely Eliminate Camera Noise
                  </a>
                  <br />
                  Posted <span className="published">08 Jun 2017</span>
                </ContentListItem>
                <ContentListItem>
                  <a href="/blog/post/photoshop-compositing-tips">
                    Photoshop Compositing Tips
                  </a>
                  <br />
                  Posted <span className="published">29 May 2017</span>
                </ContentListItem>
              </ContentList>
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

const ContentList = styled.div``;

const ContentListItem = styled.div`
  margin-bottom: 15px;
  border-bottom: solid 1px #ddd;
  padding-bottom: 15px;
  color: #575757;
  line-height: 22px;
  font-size: 14px;
  a {
    font-size: 16px;
    margin-bottom: 6px;
    margin-top: 2px;
    line-height: 1.4;
  }
  span.published {
    color: #aeaeae;
  }
`;
