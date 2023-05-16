"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const theme: MantineThemeOverride = {
  primaryColor: "teal",
  defaultGradient: { from: "teal", to: "green", deg: 65 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <body className={inter.className}>{children}</body>
      </MantineProvider>
    </html>
  );
}
