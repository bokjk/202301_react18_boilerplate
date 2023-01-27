import React, { CSSProperties } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import styled from "@emotion/styled";
import { CommonBodyStyle } from "@style/layoutStyle";
import loadable from "@loadable/component";

const TestPage1 = loadable(() => import("@pages/TestPage1"));
const TestPage2 = loadable(() => import("@pages/TestPage2"));

const LeftNaviComp = loadable(() => import("@components/LeftNaviComp"));

const ContentsLayoutStyle = styled.div`
  grid-area: contents_area;
`;

const CommonBodyLayout = () => {
  return (
    <CommonBodyStyle>
      <LeftNaviComp />
      <ContentsLayoutStyle>
        <Outlet />
      </ContentsLayoutStyle>
    </CommonBodyStyle>
  );
};

export default CommonBodyLayout;
