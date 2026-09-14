// src\app\layout.tsx
import { ManualLayout } from "@/components/layout/ManualLayout";
import { Providers } from "@/components/providers/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAS Bulletin — Online Managing Editor Manual",
  description:
    "Internal knowledge base and training manual for the Online Management Team of SAS Bulletin, AY 2026–2027.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Providers>
          <ManualLayout>{children}</ManualLayout>
        </Providers>
      </body>
    </html>
  );
}
