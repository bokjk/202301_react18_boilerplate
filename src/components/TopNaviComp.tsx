import React, { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const TopNaviStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  li.mainMenu {
    width: 120px;
    height: 100%;
    position: relative;

    & > a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    & > ul {
      position: absolute;
      top: 48px;
      left: 0;
      width: 152px;
      border: 1px solid #333;
      z-index: 100;
      display: none;
      li.subManu {
        border-bottom: 1px dashed #ccc;

        & > a {
          width: 100%;
          padding: 0 20px;
          display: flex;
          height: 35px;
          align-items: center;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    &:hover {
      background-color: #e31c39;
      & > ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const testData = [
  { title: "dashboard", url: "/" },
  {
    title: "common1",
    url: "/common/1",
    children: [
      { title: "common1", url: "/common/1" },
      { title: "common2", url: "/common/2" },
    ],
  },
  { title: "safety", url: "/safety" },
];

type TopNaviType = {
  title: string;
  url: string;
  children?: TopNaviType[];
};

const TopNaviComp = () => {
  const [menuList, setMenuList] = useState<TopNaviType[]>([]);

  useEffect(() => {
    // API 호출로 변경
    setTimeout(() => {
      setMenuList(testData);
    }, 500);
  }, []);

  return (
    <TopNaviStyle>
      {menuList &&
        menuList.map((list) => {
          return (
            <li className="mainMenu" key={`${list.title}${list.url}`}>
              <Link to={list.url}>{list.title}</Link>

              {list.children && (
                <ul>
                  {list.children.map((child) => {
                    return (
                      <li
                        className="subManu"
                        key={`${child.title}${child.url}`}
                      >
                        <Link to={child.url}>{child.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
    </TopNaviStyle>
  );
};

export default TopNaviComp;
