"use client";

import { Col } from "react-bootstrap";

import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import { themes } from "@/themes/screen";

function CustomCol({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex: boolean;
}) {
  const { state } = useContext(ThemeContext);

  return (
    <Col
      xs={10}
      className={`${flex ? "d-lg-flex justify-content-between " : ""} border ${
        themes[state].borderColor
      } offset-1 border-2 rounded-5 my-4 p-5`}
    >
      {children}
    </Col>
  );
}

export default CustomCol;
