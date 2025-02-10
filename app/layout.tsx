import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hacksuimer",
  description: "Hacksuimer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white antialiased ${jersey.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
