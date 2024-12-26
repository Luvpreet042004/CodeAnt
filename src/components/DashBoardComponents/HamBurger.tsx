import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="relative flex items-center justify-center w-12 h-12"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="w-10 h-10 flex items-center justify-center"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Line */}
        <rect
          className={`transition-all duration-300 origin-center ${
            isOpen ? "translate-y-[15px] rotate-45" : ""
          }`}
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        />
        {/* Middle Line */}
        <rect
          className={`transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          width="80"
          height="10"
          x="10"
          y="45"
          rx="5"
        />
        {/* Bottom Line */}
        <rect
          className={`transition-all duration-300 origin-center ${
            isOpen ? "-translate-y-[15px] -rotate-45" : ""
          }`}
          width="80"
          height="10"
          x="10"
          y="65"
          rx="5"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenu;
