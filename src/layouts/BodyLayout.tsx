import React, { CSSProperties } from "react";
import { Link, Routes, Route } from "react-router-dom";

import styled from "@emotion/styled";
import loadable from "@loadable/component";

const TestPage1 = loadable(() => import("@pages/TestPage1"));
const TestPage2 = loadable(() => import("@pages/TestPage2"));

const Dashboard = loadable(() => import("@pages/Dashboard"));
const NotFound = loadable(() => import("@pages/NotFound"));
const CommonBodyLayout = loadable(() => import("@layouts/CommonBody"));

type BodyType = {
  style?: CSSProperties;
};

const BodyStyle = styled.div`
  grid-area: body_area;
`;

const Body = ({ style }: BodyType) => {
  return (
    <BodyStyle className="body_area" style={{ ...style }}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<CommonBodyLayout />}>
          <Route path="common">
            <Route index element={<TestPage1 />} />
            <Route path="1" element={<TestPage1 />} />
            <Route path="2" element={<TestPage2 />} />
          </Route>
          <Route path="safety" element={<TestPage2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BodyStyle>
  );
};

export default Body;
