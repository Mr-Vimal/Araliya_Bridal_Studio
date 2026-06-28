import type { Metadata } from "next";
import "./globals.css";

import { headingFont, bodyFont } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Araliya Bridal Studio",
    template: "%s | Araliya Bridal Studio",
  },
  description: "Luxury Bridal Studio & Wedding Makeup Booking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
