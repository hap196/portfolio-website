import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "Hailey Pan",
    template: "%s | Hailey Pan",
  },
  description:
    "MIT undergraduate studying computer science with experience in software engineering at Apple and TikTok. Passionate about AI, startups, web and mobile app development, and building communities.",
  keywords: [
    "Hailey Pan",
    "Hailey Pan MIT",
    "Hailey Pan computer science",
    "Hailey Pan software engineer",
    "Hailey Pan AppDev@MIT",
    "Hailey Pan AI@MIT",
  ],
  authors: [{ name: "Hailey Pan" }],
  creator: "Hailey Pan",
  metadataBase: new URL("https://haileypan.com"),
  alternates: {
    canonical: "https://haileypan.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hailey Pan",
    description:
      "MIT undergraduate studying computer science with experience in software engineering at Apple and TikTok. Passionate about AI, web development, and building meaningful communities.",
    url: "https://haileypan.com",
    siteName: "Hailey Pan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--color-background)]">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
