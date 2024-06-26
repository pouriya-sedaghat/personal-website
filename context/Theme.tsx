"use client";

import { createContext, useState } from "react";

type State = string;
type SetState = (state: string) => void;

interface ThemeContext {
  state: State;
  setState: SetState;
}

export const ThemeContext = createContext({} as ThemeContext);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
}
