import type { Metadata } from "next";

import localFont from "next/font/local";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import App from "@/layout/App";

import { ThemeContextProvider } from "@/context/Theme";

import { basePath } from "@/next.config.mjs";

const font = localFont({
  src: "../public/fonts/PlaywriteITModerna-Regular.woff2",
});

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
      <body className={font.className}>
        <ThemeContextProvider>
          <App>{children}</App>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
