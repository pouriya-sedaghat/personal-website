"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import { Theme } from "@/interface/Theme";

function ChangeThemeHandler({ theme }: { theme: Theme }) {
  const { setState } = useContext(ThemeContext);

  return (
    <div className="btn-group">
      <button
        className={`btn ${theme.BTNColor}`}
        onClick={() => setState("dark")}
      >
        Dark
      </button>
      <button
        className={`btn ${theme.BTNColor}`}
        onClick={() => setState("light")}
      >
        Light
      </button>
    </div>
  );
}

export default ChangeThemeHandler;
