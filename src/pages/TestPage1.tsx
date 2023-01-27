import React from "react";
// import loadable from "@loadable/component";
import styled from "@emotion/styled";

// const Header = loadable(() => import("@components/HeaderComp"));
// const Body = loadable(() => import("@components/BodyComp"));
// const Footer = loadable(() => import("@components/FooterComp"));

const TestPageStyle = styled.div`
  width: 100%;
  height: 100%;

  .testBox {
    width: 100px;
    height: 3000px;
    background-color: red;
  }
`;

const TestPage1 = () => {
  return (
    <TestPageStyle>
      테스트 페이지
      {/*<div className="testBox"></div>*/}
    </TestPageStyle>
  );
};

export default TestPage1;
