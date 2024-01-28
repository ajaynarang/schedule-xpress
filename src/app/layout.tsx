import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SchedulerXpress",
  description: "Efficiently assign teachers, manage attendance at Hogwarts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
