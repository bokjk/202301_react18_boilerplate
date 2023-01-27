import React from "react";

import styled from "@emotion/styled";

const LeftNaviStyle = styled.div`
  grid-area: left_navi_area;

  border-right: 1px solid #ddd;
`;

const LeftNaviComp = () => {
  return <LeftNaviStyle>LeftNavi</LeftNaviStyle>;
};

export default LeftNaviComp;
