import React from "react";
import loadable from "@loadable/component";
import styled from "@emotion/styled";

import { MainLayout } from "@style/layoutStyle";

const Header = loadable(() => import("@layouts/HeaderLayout"));
const Body = loadable(() => import("@layouts/BodyLayout"));
const Footer = loadable(() => import("@layouts/FooterLayout"));

const MainPage = () => {
  return (
    <MainLayout>
      <Header />
      <Body />
      <Footer />
    </MainLayout>
  );
};

export default MainPage;
