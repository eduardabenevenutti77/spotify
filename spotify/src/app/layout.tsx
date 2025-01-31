import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
