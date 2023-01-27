import styled from "@emotion/styled";

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header_area"
    "body_area"
    "footer_area";
  grid-template-rows: 50px 1fr 60px;
  overflow: auto;
`;

export const CommonBodyStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "left_navi_area contents_area";
  grid-template-columns: 210px 1fr;
`;
