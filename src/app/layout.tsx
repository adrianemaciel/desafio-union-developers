import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Union Developers",
  description: "Desafio Union Developers!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-primary">{children}</body>
    </html>
  );
}
