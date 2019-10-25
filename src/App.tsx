import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { PageHeaderWrapper } from "./components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "./components-layout/PageHeader/PageHeader";
import { ResponsiveContainer } from "./components-layout/ResponsiveContainer";
import {
  NavBar,
  NavBarLogo,
  NavBarMenu,
  NavBarMenuItem
} from "./components/NavBar/NavBar";

const MyNavBarLogo = styled.div`
  padding: 14px 10px;
`;

const App: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageHeader>
          <NavBar backgroundColor={"#3087de"}>
            <ResponsiveContainer centreContainer={true}>
              <NavBarLogo>
                <MyNavBarLogo>Logo Img</MyNavBarLogo>
              </NavBarLogo>
              <NavBarMenu>
                <NavBarMenuItem>Book</NavBarMenuItem>
                <NavBarMenuItem>Videos</NavBarMenuItem>
              </NavBarMenu>
            </ResponsiveContainer>
          </NavBar>
        </PageHeader>
      </PageHeaderWrapper>

      <ResponsiveContainer centreContainer={true}>
        <div>
          <p>FSJSD Design System</p>
          <p>
            <Button>test</Button>
          </p>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default App;
