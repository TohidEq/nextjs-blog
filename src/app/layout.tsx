import Navigation from "@/components/Navigation";
import "@/styles/index.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextBlog",
  description: "NextBlog is a simple NextJS Blog. :D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
