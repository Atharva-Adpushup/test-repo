import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";
import "../styles/ScrollButton.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="fixed bottom-10 z-50 left-10 w-12 h-12 bg-tuna text-white p-3 rounded-lg cursor-pointer  transition duration-500 ease-in-out bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
      style={{ display: visible ? "inline" : "none" }}
    >
      <ChevronDoubleUpIcon onClick={scrollToTop} />
    </div>
  );
};

export default ScrollButton;
