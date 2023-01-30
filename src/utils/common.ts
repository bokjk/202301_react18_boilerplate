import axios, { AxiosError } from "axios";
import { selector, useRecoilState, useRecoilValue } from "recoil";

//*********** 토큰 **************

// Access 토큰 재발행
// 억세스토큰은 만료되면 리플레시 토큰으로 재발행
export function reissueAccess() {}

// 전체 발행 Access, Refresh
export async function issueTotalToken() {
  try {
    const response = await axios({
      method: "post",
      url: `/api/login`,
      headers: {
        authorization: `asdfasdfasdfasf`,
      },
      data: {},
    });

    saveAccessToken();
    saveRefreshToken();
    return true;
  } catch (error) {
    console.error(error);
    // TODO: 실제 API 연동 후 false 로 수정해야함
    return true;
  }
}

// 모든 토큰 삭제
export function delAllToken() {}

// Access 토큰 삭제
export function delAccessToken() {}

// Access 토큰 값 받아오기
export function getAccessToken() {}

// Refresh 토큰 값 받아오기
export function getRefreshToken() {}

// Access 토큰 메모리 저장 (Recoil)
function saveAccessToken() {
  console.log("Access 토큰 저장");
}

// Refresh 토큰 세션스토리지 저장 (브라우져 종료시 삭제)
function saveRefreshToken() {
  console.log("Refresh 토큰 저장");
}
