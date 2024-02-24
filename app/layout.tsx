import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiango",
  description: "Create forms and track them using Fiango today.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/fiango-dark.svg",
        href: "/fiango-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/fiango-light.svg",
        href: "/fiango-light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
