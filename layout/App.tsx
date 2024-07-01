"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Theme from "@/components/Theme";

import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import { themes } from "@/themes/screen";

import { ScreenType } from "@/interface/ScreenType";

function App({ children }: { children: React.ReactNode }) {
  const { state, toggleThemeHandler } = useContext(ThemeContext);

  const theme = themes[state as keyof ScreenType];

  return (
    <Theme theme={theme}>
      <Header theme={theme} values={{ state, toggleThemeHandler }} />
      <main className="container">{children}</main>
      <Footer theme={theme} />
    </Theme>
  );
}

export default App;
