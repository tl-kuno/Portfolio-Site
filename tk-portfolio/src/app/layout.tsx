import type { Metadata } from "next";
import { Poppins, Quicksand } from 'next/font/google';

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap"
}
);

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
})


export const metadata: Metadata = {
  title: "Taylor Kuno Portfolio",
  description: "A collection of personal and professional projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${quicksand.className}`}
      >
        {children}
      </body>
    </html>
  );
}
