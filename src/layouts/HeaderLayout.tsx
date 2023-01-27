import React from "react";
import styled from "@emotion/styled";

import loadable from "@loadable/component";

const TopNaviComp = loadable(() => import("@components/TopNaviComp"));

const HeaderStyle = styled.div`
  grid-area: header_area;

  border-bottom: 1px solid #ddd;
  box-shadow: 0 3px 3px rgb(150 150 150 / 10%);
`;

const Header = () => {
  return (
    <HeaderStyle>
      <TopNaviComp />
    </HeaderStyle>
  );
};

export default Header;
