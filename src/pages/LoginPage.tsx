import React from "react";
import styled from "@emotion/styled";
import { LoginPageStyle } from "@style/loginPageStyle";

import { InputTextComp, InputPasswordComp } from "@components/FormsComp";
import { CustomButton } from "@components/ButtonsComp";

import { PersonCircle, ShieldLock } from "@emotion-icons/bootstrap";

type LoginType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPage = ({ setLogin }: LoginType) => {
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("로그인 버튼 클릭");
    setLogin(true);
  };

  return (
    <LoginPageStyle>
      <div className={"loginCard"}>
        <h1>통합SHE시스템</h1>

        <form onSubmit={loginHandler}>
          <InputTextComp
            id={"id"}
            name={"id"}
            title={"아이디"}
            style={{ marginTop: "30px" }}
          >
            <PersonCircle size="30" />
          </InputTextComp>

          <InputPasswordComp
            id={"password"}
            name={"password"}
            title={"패스워드"}
            style={{ marginTop: "10px" }}
          >
            <ShieldLock size="30" />
          </InputPasswordComp>

          <CustomButton type="danger" style={{ marginTop: "20px" }}>
            Login
          </CustomButton>
        </form>

        <div className={"copyright"} style={{ marginTop: "30px" }}>
          COPYRIGHT © 2022 DUEGOSYSTEM ALL RIGHT RESERVED.
        </div>
      </div>
    </LoginPageStyle>
  );
};

export default LoginPage;
