import React, { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const TopNaviStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > li {
    width: 100px;
  }
`;

const TopNaviComp = () => {
  return (
    <TopNaviStyle>
      <li>
        <Link to="/">dashboard</Link>{" "}
      </li>
      <li>
        <Link to="/common/1">common1</Link>{" "}
      </li>
      <li>
        <Link to="/common/2">common2</Link>{" "}
      </li>
      <li>
        <Link to="/safety">safety</Link>{" "}
      </li>
    </TopNaviStyle>
  );
};

export default TopNaviComp;
