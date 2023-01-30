import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { loginState } from "@utils/global";

import loadable from "@loadable/component";

const TopNaviComp = loadable(() => import("@components/TopNaviComp"));

const HeaderStyle = styled.div`
  grid-area: header_area;

  border-bottom: 1px solid #ddd;
  box-shadow: 0 3px 3px rgb(150 150 150 / 10%);

  display: grid;
  grid-template-columns: auto 200px;

  .userInfoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = () => {
  const [login, setLogin] = useRecoilState(loginState);
  return (
    <HeaderStyle>
      <TopNaviComp />
      <div className="userInfoContainer">
        <a
          onClick={() => {
            setLogin(false);
          }}
        >
          로그아웃
        </a>
      </div>
    </HeaderStyle>
  );
};

export default Header;
