import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ButtonBasicType = {
  children?: JSX.Element[] | JSX.Element | string;
  style?: CSSProperties;
  type?: "basic" | "success" | "danger" | "warning" | "info" | "light" | "dark";
};

const ButtonBasicStyle = styled.button`
  border: none;
  height: 50px;
  width: 100%;
`;

export const ButtonBasic = ({ children, style }: ButtonBasicType) => {
  return <ButtonBasicStyle style={{ ...style }}>{children}</ButtonBasicStyle>;
};

export const CustomButton = ({ children, style, type }: ButtonBasicType) => {
  let bgColor = "";
  let textColor = "";

  switch (type) {
    case "basic":
      bgColor = "#0d6efd";
      textColor = "#fff";
      break;
    case "success":
      bgColor = "#198754";
      textColor = "#fff";
      break;
    case "danger":
      bgColor = "#dc3545";
      textColor = "#fff";
      break;
    case "warning":
      bgColor = "#ffc107";
      textColor = "#212529";
      break;
    case "info":
      bgColor = "#0dcaf0";
      textColor = "#212529";
      break;
    case "light":
      bgColor = "#f8f9fa";
      textColor = "#212529";
      break;
    case "dark":
      bgColor = "#212529";
      textColor = "#fff";
      break;
    default:
      bgColor = "#0d6efd";
      textColor = "#fff";
      break;
  }
  return (
    <ButtonBasic
      style={{ backgroundColor: bgColor, color: textColor, ...style }}
    >
      {children}
    </ButtonBasic>
  );
};
