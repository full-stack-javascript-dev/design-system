import React from "react";
import { PageHeaderWrapper } from "../components-layout/PageHeader/PageHeaderWrapper";
import { PageHeader } from "../components-layout/PageHeader/PageHeader";
import { NavBar } from "../components/NavBar/NavBar";

import { NavLinks } from "./shared/NavLinks";

export const Youtube: React.FC = () => {
  return (
    <>
      <PageHeaderWrapper backgroundColor={"#777"}>
        <PageHeader>
          <NavBar>
            <NavLinks />
          </NavBar>
        </PageHeader>
        <div>After header</div>
      </PageHeaderWrapper>
    </>
  );
};
