import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./QueryProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KonfHub Frontend Evaluation Task",
  description: "This is a frontend evaluation task for KonfHub. The task is to fetch event details from the backend and display them on the frontend. The frontend is built using Next.js and Tailwind CSS. Submitted by: Abhishek Kushwaha abhishekkushwahahere@gmail.com",
};


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
