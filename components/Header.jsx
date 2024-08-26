"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [theme, setTheme] = useState("cupcake"); // กำหนดธีมเริ่มต้น

  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "cupcake" ? "dark" : "cupcake");
  };
  return (
    <header
      className={`sticky top-0 z-[100] transition-all ${
        header ? "py-4 shadow-lg dark:bg-accent" : "py-4"
      } ${
        pathname === "/"
          ? theme === "dark"
            ? "bg-[#282a36]" // สีพื้นหลังเมื่อเป็น dark mode และอยู่ในหน้าแรก
            : "bg-[#fef9f5]" // สีพื้นหลังเมื่อเป็น light mode และอยู่ในหน้าแรก
          : theme === "dark"
          ? "bg-dark" // สีพื้นหลังเมื่อเป็น dark mode ในหน้าอื่น ๆ
          : "bg-cupcake" // สีพื้นหลังเมื่อเป็น light mode ในหน้าอื่น ๆ
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* ส่วนของ Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 
              items-center mr-9"
              linkStyles="relative hover:text-pink-700 transition"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <label className="flex cursor-pointer gap-2" onClick={toggleTheme}>
              <svg
                 // ให้คลิก SVG อันแรกเพื่อเปลี่ยนธีม
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                 // ให้คลิก SVG อันที่สองเพื่อเปลี่ยนธีม
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* ส่วนของ Mobile Nav */}
            <MobileNav theme={theme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
