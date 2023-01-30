import React, { useState } from "react";
import loadable from "@loadable/component";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "@utils/global";

const LoginPage = loadable(() => import("@pages/LoginPage"));
const MainPage = loadable(() => import("@pages/MainPage"));

const App = () => {
  // 추후 API 호출떄마다 토큰을 확인하여 로그인을 제거
  const [login, setLogin] = useRecoilState(loginState);

  console.log("테스트");

  return login ? <MainPage /> : <LoginPage />;
};
export default App;
