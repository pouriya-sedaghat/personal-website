"use client";

import { createContext, useState } from "react";

import { ThemeContext as TC } from "@/interface/ThemeContext";

export const ThemeContext = createContext({} as TC);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<string>("light");

  function toggleThemeHandler() {
    state === "light" ? setState("dark") : setState("light");
  }

  return (
    <ThemeContext.Provider value={{ state, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
