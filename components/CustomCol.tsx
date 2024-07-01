"use client";

import { Col } from "react-bootstrap";

import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import { themes } from "@/themes/screen";

import { ScreenType } from "@/interface/ScreenType";

function CustomCol({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass?: string;
}) {
  const { state } = useContext(ThemeContext);

  const { borderColor } = themes[state as keyof ScreenType];

  return (
    <Col
      xs={10}
      className={`${
        customClass || ""
      } border ${borderColor} offset-1 border-2 rounded-5 my-4 p-5`}
    >
      {children}
    </Col>
  );
}

export default CustomCol;
