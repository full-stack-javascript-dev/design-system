import React from "react";
import { Button } from "../components/Button";
import { CarouselPromo } from "../components/Carousel";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { ResponsiveContainer } from "../components-layout/ResponsiveContainer";
import { NavBar } from "../components/NavBar/NavBar";
import { H1, H2, H3 } from "../components/Headings";

import { NavLinks } from "./shared/NavLinks";
import { Footer } from "./shared/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageHeader>
          <NavBar backgroundColor={"#3087de"}>
            <NavLinks />
          </NavBar>
        </PageHeader>
      </PageHeaderWrapper>

      {false && (
        <div style={{ backgroundColor: "#000" }}>
          <ResponsiveContainer centreContainer={true}>
            <CarouselPromo style={{ color: "#FFF" }}>
              <>
                <div className="lead">
                  Join our email newsletter and get our free
                </div>
                <h2>EBOOK</h2>
                <div>
                  <Button>test</Button>
                </div>
              </>
            </CarouselPromo>
          </ResponsiveContainer>
        </div>
      )}

      <ResponsiveContainer centreContainer={true} style={{ flex: "1 0 auto" }}>
        <div>
          <H1>FSJSD Design System</H1>
          <p>para</p>
          <H2>Heading 2</H2>
          <p>para</p>
          <H3>Heading 3</H3>
          <p>para</p>
          <p>
            <Button>test</Button>
          </p>
        </div>
      </ResponsiveContainer>

      <Footer />
    </>
  );
};

export default Home;
