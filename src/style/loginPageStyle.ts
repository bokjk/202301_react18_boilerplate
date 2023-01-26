import styled from "@emotion/styled";

export const LoginPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;

  h1 {
    font-size: 21px;
    font-weight: bold;
    color: #555;
  }

  .loginCard {
    display: flex;
    flex-direction: column;
    width: 540px;
    height: 480px;
    border: none;
    background-color: #fff;
    padding: 45px;
    box-shadow: 0 4px 5px rgb(0 0 0 / 10%);
    border-radius: 12px;

    .copyright {
      font-size: 11px;
      color: #999;
      text-align: center;
    }
  }
`;
