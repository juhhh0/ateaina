import type { Metadata } from "next";
import { M_PLUS_1 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNavbar } from "@/services/data/loaders";

const mplus = M_PLUS_1({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/custom.ico',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = await getNavbar()
  return (
    <html lang="fr">
      <body className={mplus.className}>
        <Navbar data={navbar}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
