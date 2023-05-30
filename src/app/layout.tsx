import TodoContextWrapper from "@/contexts/TodoContext";


import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "persistent TODO",
  description: "persisting TodoList on Next.js, using Context, Reducer and localStorage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <TodoContextWrapper>
          <body className={inter.className}>
            <main className="relative w-full p-10  bg-violet-800 ">
              <section className=" w-full lg:max-w-[800px] m-auto">
                <Navbar />
                {children}
              </section>
            </main>
          </body>
        </TodoContextWrapper>
    </html>
  );
}
