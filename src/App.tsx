import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./demo/Home";
import { Gallery } from "./demo/Gallery";
import { Galleries } from "./demo/Galleries";
import { GalleryPhoto } from "./demo/GalleryPhoto";

import { Youtube } from "./demo/Youtube";
import { YoutubeVideo } from "./demo/YoutubeVideo";
import { BlogPost } from "./demo/BlogPost";
import { Blog } from "./demo/Blog";
import { ThemeProvider } from "styled-components";
import { theme } from "./demo/theme";
import { GlobalStyle } from "./components/GlobalStyle";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <Root>
            <Switch>
              <Route path="/galleries">
                <Galleries />
              </Route>
              <Route path="/gallery/:galleryid">
                <Gallery />
              </Route>
              <Route path="/photo/:galleryid/:photoid">
                <GalleryPhoto />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/blogpost/:slug">
                <BlogPost />
              </Route>
              <Route path="/youtube">
                <Youtube />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Root>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
