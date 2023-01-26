import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LabelStyle = styled.label`
  border: 1px solid #ddd;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
`;

const IconStyle = styled.div`
  padding: 10px 16px;
  color: #777;
`;

const InputTextStyle = styled.input`
  width: 100%;
  height: ${(props) => props.height ?? "50px"};
  border: none;
  padding: 0 10px;
`;

type InputTextType = {
  id: string;
  name: string;
  title: string;
  height?: string;
  children: JSX.Element[] | JSX.Element;
  style?: CSSProperties;
};

export const InputTextComp = ({
  id,
  name,
  title,
  height,
  children,
  style,
}: InputTextType) => {
  return (
    <LabelStyle htmlFor={id} style={{ ...style }}>
      <IconStyle>{children}</IconStyle>
      <InputTextStyle id={id} name={name} title={title} placeholder={title} />
    </LabelStyle>
  );
};

export const InputPasswordComp = ({
  id,
  name,
  title,
  height,
  children,
  style,
}: InputTextType) => {
  return (
    <LabelStyle htmlFor={id} style={{ ...style }}>
      <IconStyle>{children}</IconStyle>
      <InputTextStyle
        id={id}
        name={name}
        title={title}
        placeholder={title}
        type="password"
      />
    </LabelStyle>
  );
};
