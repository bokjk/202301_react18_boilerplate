import React from "react";
// import loadable from "@loadable/component";
import styled from "@emotion/styled";

// const Header = loadable(() => import("@components/HeaderComp"));
// const Body = loadable(() => import("@components/BodyComp"));
// const Footer = loadable(() => import("@components/FooterComp"));

const DashboardStyle = styled.div`
  background-color: #f4f4f5;

  height: 100%;
  width: 100%;
`;

const Dashboard = () => {
  return <DashboardStyle>대시보드</DashboardStyle>;
};

export default Dashboard;
