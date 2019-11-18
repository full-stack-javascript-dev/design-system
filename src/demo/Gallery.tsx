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

import { default as GalleryComp } from "react-photo-gallery";

const TagLink = TagComponent(Link);

const photos = [
  {
    href: "http://www.toyshooter.com/photo/sw-rebel-heart",
    src: "http://cdn.toyshooter.com/gallery/sw-rebel-heart_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-a-rare-breed",
    src: "http://cdn.toyshooter.com/gallery/sw-a-rare-breed_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-wanted",
    src: "http://cdn.toyshooter.com/gallery/sw-wanted_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-your-fathers-lightsaber",
    src:
      "http://cdn.toyshooter.com/gallery/sw-your-fathers-lightsaber_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-fear",
    src: "http://cdn.toyshooter.com/gallery/sw-fear_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-bombshells-bombs-away",
    src: "http://cdn.toyshooter.com/gallery/dc-bombshells-bombs-away_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-arkham-cornered",
    src: "http://cdn.toyshooter.com/gallery/dc-arkham-cornered_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-here-to-rescue-you",
    src: "http://cdn.toyshooter.com/gallery/sw-here-to-rescue-you_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/ht-widow-vs-ultron",
    src: "http://cdn.toyshooter.com/gallery/ht-widow-vs-ultron_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/ht-widow-v-chitauri",
    src: "http://cdn.toyshooter.com/gallery/ht-widow-v-chitauri_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/figma-samu-arun",
    src: "http://cdn.toyshooter.com/gallery/figma-samu-arun_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-dance-for-me",
    src: "http://cdn.toyshooter.com/gallery/sw-dance-for-me_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-travel-arrangements",
    src: "http://cdn.toyshooter.com/gallery/sw-travel-arrangements_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-reactor-down",
    src: "http://cdn.toyshooter.com/gallery/sw-reactor-down_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/ml-dark-phoenix",
    src: "http://cdn.toyshooter.com/gallery/ml-dark-phoenix_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/ht-widow-emerges",
    src: "http://cdn.toyshooter.com/gallery/ht-widow-emerges_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-strike-me-down",
    src: "http://cdn.toyshooter.com/gallery/sw-strike-me-down_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-pak-knockour",
    src: "http://cdn.toyshooter.com/gallery/dc-pak-knockour_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-pak-harley-01",
    src: "http://cdn.toyshooter.com/gallery/dc-pak-harley-01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-poison-ivy-01",
    src: "http://cdn.toyshooter.com/gallery/dc-poison-ivy-01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-grandfather",
    src: "http://cdn.toyshooter.com/gallery/sw-grandfather_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/jokers-reckoning",
    src: "http://cdn.toyshooter.com/gallery/jokers-reckoning_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/gijoe-radicalisation",
    src: "http://cdn.toyshooter.com/gallery/gijoe-radicalisation_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/figma-birth",
    src: "http://cdn.toyshooter.com/gallery/figma-birth_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-altering-the-deal",
    src: "http://cdn.toyshooter.com/gallery/sw-altering-the-deal_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/ml-nova",
    src: "http://cdn.toyshooter.com/gallery/ml-nova_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-ht-rey-kylo",
    src: "http://cdn.toyshooter.com/gallery/sw-ht-rey-kylo_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-flight-school",
    src: "http://cdn.toyshooter.com/gallery/sw-flight-school_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-jakku-sunset",
    src: "http://cdn.toyshooter.com/gallery/sw-jakku-sunset_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/dc-stargirl",
    src: "http://cdn.toyshooter.com/gallery/dc-stargirl_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/figma-ghost-watch",
    src: "http://cdn.toyshooter.com/gallery/figma-ghost-watch_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-lego-moseisely-02",
    src: "http://cdn.toyshooter.com/gallery/sw-lego-moseisely-02_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/lego-vintage-guarded-inn",
    src: "http://cdn.toyshooter.com/gallery/lego-vintage-guarded-inn_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-mcquarrie",
    src: "http://cdn.toyshooter.com/gallery/sw-mcquarrie_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-leia-tantive",
    src: "http://cdn.toyshooter.com/gallery/sw-leia-tantive_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/gijoe-ss-destro01",
    src: "http://cdn.toyshooter.com/gallery/gijoe-ss-destro01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-ss-r2d2-helpme",
    src: "http://cdn.toyshooter.com/gallery/sw-ss-r2d2-helpme_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-lego-moseisely-01",
    src: "http://cdn.toyshooter.com/gallery/sw-lego-moseisely-01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-ss-fett-01",
    src: "http://cdn.toyshooter.com/gallery/sw-ss-fett-01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/lego-vintage-catapult",
    src: "http://cdn.toyshooter.com/gallery/lego-vintage-catapult_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/lego-vintage-blacksmith",
    src: "http://cdn.toyshooter.com/gallery/lego-vintage-blacksmith_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/lego-vintage-black-falcons-fortress",
    src:
      "http://cdn.toyshooter.com/gallery/lego-vintage-black-falcons-fortress_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/lego-vintage-armor",
    src: "http://cdn.toyshooter.com/gallery/lego-vintage-armor_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-tatooinepostal",
    src: "http://cdn.toyshooter.com/gallery/sw-tatooinepostal_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-ss-yoda-01",
    src: "http://cdn.toyshooter.com/gallery/sw-ss-yoda-01_small.jpg"
  },
  {
    href: "http://www.toyshooter.com/photo/sw-snowspeeder-01",
    src: "http://cdn.toyshooter.com/gallery/sw-snowspeeder-01_small.jpg"
  }
];

export const Gallery: React.FC = () => {
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
              <GalleryComp photos={photos} />;
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
