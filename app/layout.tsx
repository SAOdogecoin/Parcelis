import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parcelis",
  description: "Built with AI Studio - The fastest path from prompt to production",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
