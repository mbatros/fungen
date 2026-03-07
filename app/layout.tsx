import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fungen",
  description: "AI-powered viral fun generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
