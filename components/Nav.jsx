"use client";

import Link from "next/link";

import { House, FolderKanban, Contact } from "lucide-react";

const Nav = ({ containerStyles, linkStyles }) => {
  const handleClick = (e) => {
    // ตรวจสอบว่าเราอยู่ในหน้า home ก่อนเรียก scroll to top
    if (window.location.pathname === "/") {
      e.preventDefault(); // ป้องกันการนำทางใหม่เมื่ออยู่ในหน้า home
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const iconMap = {
    House: <House className="mr-1" />,
    FolderKanban: <FolderKanban className="mr-1"/>,
    Contact: <Contact className="mr-1"/>,
  };

  const links = [
    { path: "/", icon: "House", name: "home", onClick: handleClick },
    { path: "/projects", icon: "FolderKanban", name: "my projects" },
    { path: "/contact", icon: "Contact", name: "contact" },
  ];

  return (
    <nav className={`${containerStyles} `}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={link.onClick} // เพิ่ม onClick handler
          >
            <div className="flex">
            {iconMap[link.icon]}
            {link.name}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
