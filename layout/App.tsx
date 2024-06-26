"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useContext } from "react";
import { ThemeContext } from "@/context/Theme";

import { themes } from "@/themes/screen";

function App({ children }: { children: React.ReactNode }) {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={`d-flex flex-column justify-content-between ${
        themes[state].color + " " + themes[state].bgColor
      } min-vh-100`}
    >
      <Header theme={themes[state]} />
      <main className="container">{children}</main>
      <Footer theme={themes[state]} />
    </div>
  );
}

export default App;
