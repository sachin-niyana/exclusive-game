"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 border-[#7AF57A] animate-bounce bg-green-shadow text-white p-4 rounded-full z-50 transition-all duration-300 "
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
export default BackToTop;
