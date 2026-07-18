import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import "./globals.css"
import Header from "@/components/header";
import { GoogleAnalytics } from '@next/third-parties/google'

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Mohammad Mallaee",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-4xl mx-auto ${vollkorn.className} antialiased py-9 px-3`}>
        <Header />
        <GoogleAnalytics gaId="G-LLHHBBNRLC" />
        {children}
      </body>
    </html>
  );
}
