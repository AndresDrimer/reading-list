import BookContextWrapper from "@/contexts/BookContext";
import AlertContextWrapper from "@/contexts/AlertContext";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CDLC books",
  description: "Libros de Café de las Ciudades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AlertContextWrapper>
        <BookContextWrapper>
          <body className={inter.className}>
            <main className="relative w-full p-10  bg-violet-800 ">
              <section className=" w-full lg:max-w-[800px] m-auto">
                <Navbar />
                {children}
              </section>
            </main>
          </body>
        </BookContextWrapper>
      </AlertContextWrapper>
    </html>
  );
}
