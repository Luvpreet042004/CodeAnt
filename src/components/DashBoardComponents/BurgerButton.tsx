import React from "react";
import Subtract from '../../picture/Subtract.svg'

interface ChildProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


const BurgerButton : React.FC<ChildProps> = ({isOpen, setIsOpen})=>{

    return(
        <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
            <img src={Subtract} alt="" />
        <span className="font-bold text-xl">CodeAnt AI</span>
        </div>
        <button
      className="relative lg:hidden flex items-center justify-center w-12 h-12"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      onClick={() => {setIsOpen(!isOpen);console.log(isOpen);
      }}
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
        </div>
    )
}

export default BurgerButton;