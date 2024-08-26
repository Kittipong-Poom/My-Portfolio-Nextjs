"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import MyService from "@/components/MyService";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    document.title = "Home Portfolio";
  }, []);
  return (
      <main>
        <Hero />
        <About />
        <MyService />
      </main>
  );
}
