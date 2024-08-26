"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={scrollToTop}
        className={`bg-pink-500 text-white text-xl p-5 rounded-lg shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } hover:bg-pink-700`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTop;
