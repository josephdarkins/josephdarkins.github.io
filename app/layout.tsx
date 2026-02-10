import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joseph Darkins | Technology Leader & CTO",
  description:
    "Joseph Darkins - Technology leader, CTO, and product strategist. Expertise in AI, leadership, and driving growth in ambitious businesses.",
  keywords: [
    "CTO",
    "Technology Leadership",
    "Product Strategy",
    "AI",
    "Software Engineering",
    "Product Director",
    "Digital Transformation",
  ],
  authors: [{ name: "Joseph Darkins" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Joseph Darkins | Technology Leader & CTO",
    description:
      "Technology leader, CTO, and product strategist with experience across Fortune 500 and startups.",
    type: "website",
    url: "https://josephdarkins.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
