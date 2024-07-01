import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import App from "@/layout/App";

import { ThemeContextProvider } from "@/context/Theme";

import { basePath } from "@/next.config.mjs";

export const metadata: Metadata = {
  description: "Pouriya Sedaghat Personal Website.",
  icons: { icon: `${basePath}/favicon.ico` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <App>{children}</App>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
