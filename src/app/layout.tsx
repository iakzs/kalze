import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import GlobalClickSpark from "@/components/GlobalClickSpark";
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
  title: "kalze.dev :3",
  description:
    "kalze's webpage!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased selection:bg-pink-200 dark:selection:bg-pink-500/30`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
              <Link
                href="/"
                className="text-xl font-bold text-black dark:text-zinc-50 lowercase transition-opacity hover:opacity-70"
              >
                kalze.dev
              </Link>
              <div className="flex gap-6 items-center">
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
                >
                  Blog
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <GlobalClickSpark />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
