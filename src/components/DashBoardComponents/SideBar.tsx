import React, { useState, useEffect } from "react";
// import { useWindowSize } from "react-use";
import Repo from '../../picture/Repo.svg';
import Code from '../../picture/Code.svg';
import Cloud from '../../picture/Cloud.svg';
import Book from '../../picture/Book.svg';
import Setting from '../../picture/Setting.svg';
import Phn from '../../picture/Phn.svg';
import Out from '../../picture/Out.svg';
import BurgerButton from './BurgerButton';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);

useEffect(() => {
  const handleResize = () => {
    setIsOpen(window.innerWidth >= 1024);
  };
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [])
    // This will run every time the width changes

  return (
    <div className="bg-white fixed space-y-3 w-full lg:w-1/5 lg:h-screen p-4 flex flex-col">
      <div className="py-1">
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="bg-gray-200 rounded-lg py-2 px-3">
          <select className="bg-gray-200 w-full focus:outline-none">
            <option value=""></option>

          </select>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-full opacity-100' : 'max-h-0'
        } lg:flex flex-col lg:h-screen justify-between`}
      >
        <nav className="space-y-3 flex flex-col">
          <button className="flex items-center rounded-lg p-2 text-white bg-blue-600 font-bold">
            <img src={Repo} alt="Repositories" className="mr-2" />
            Repositories
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Code} alt="AI Code Review" className="mr-2" />
            AI Code Review
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Cloud} alt="Cloud Security" className="mr-2" />
            Cloud Security
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Book} alt="How to Use" className="mr-2" />
            How to Use
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Setting} alt="Settings" className="mr-2" />
            Settings
          </button>
        </nav>

        <div className="flex flex-col space-y-3">
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Phn} alt="Support" className="mr-2" />
            Support
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <img src={Out} alt="Logout" className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
