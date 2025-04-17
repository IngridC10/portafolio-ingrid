import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ingrid Calzada | Desarrolladora Fronted ",
  description: "portafolio Ingrid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${Poppins.className} h-full`}>{children}</body>
    </html>
  );
}
