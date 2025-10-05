import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "Pedri Pedri Pedri",
    icons: {
    icon: "/icons/faviconp.ico",
  },
    description: "Este projeto apresenta o desenvolvimento de um portal de fã sobre o jogador Pedri, centralizando informações hoje dispersas em diferentes fontes.",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
