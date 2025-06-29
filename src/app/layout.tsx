import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CommonLayout from "@/components/CommonLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaniz Fatama- Front-End Developer | Portfolio",
  description:
    "Front-End developer specializing in modern web applications. Explore my projects, skills, and experience in MongoDB, Express.js, React, and Node.js.",
  keywords:
    "Front-End Developer, React, Node.js, MongoDB, Express.js, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Kaniz Fatama" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Kaniz Fatama- Front-End Developer",
    description: "Front-End developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommonLayout> {children}</CommonLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
