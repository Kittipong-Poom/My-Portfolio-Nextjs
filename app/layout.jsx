import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
const outfit = Outfit({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" suppressHydrationWarning>
       <title>Portfolio</title>
       <link rel="icon" href="/logokp2.jpg" />
      <body className={outfit.className} >
        <Header/>
        {children}
        <ScrollToTop />
        <Footer/>
        </body>
    </html>
  );
}
