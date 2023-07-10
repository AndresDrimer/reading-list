import "./globals.css";

import TodoContextWrapper from "@/contexts/TodoContext";
import Navbar from "./components/Navbar";

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "persistent TODO",
  description:
    "persisting TodoList on Next.js, using Context, Reducer and localStorage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodoContextWrapper>
          <main className="relative w-full p-10  bg-violet-800 h-screen">
            <section className=" w-full lg:max-w-[800px] m-auto">
              <Navbar />
              {children}
            </section>
          </main>
        </TodoContextWrapper>
      </body>
    </html>
  );
}
