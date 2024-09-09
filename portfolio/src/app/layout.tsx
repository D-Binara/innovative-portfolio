import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binara Kaveesha - Portfolio",
  description: "Welcome to the portfolio of Binara Kaveesha, showcasing projects, skills, and experiences in software development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
        <meta name="google-site-verification" content="o2HXFlunKthkmZlEzQQ3iWt_XZBe3d9wNAN6RgifN5c" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
