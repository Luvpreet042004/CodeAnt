import React, { useState } from "react";
import Repo from '../../picture/Repo.svg'
import Code from '../../picture/Code.svg'
import Cloud from '../../picture/Cloud.svg'
import Book from '../../picture/Book.svg'
import Setting from '../../picture/Setting.svg'
import Phn from '../../picture/Phn.svg'
import Out from '../../picture/Out.svg'
import BurgerButton from './BurgerButton'


const Sidebar: React.FC = () => {
    const [isOpen,setIsOpen] = useState(false)

  return (
    <>
    {/* Mobile Toggle Button */}
    <div className=" bg-white space-y-3 w-full lg:h-screen p-4 flex flex-col">
        <div className="py-1">
        <BurgerButton  isOpen = {isOpen} setIsOpen={setIsOpen} />
        <div className="bg-gray-200 rounded-lg py-2 px-3">
          <select className="bg-gray-200 w-full focus:outline-none">
            <option></option>
          </select>
        </div>
        </div>

        <div className="space-y-3 lg:flex flex-col lg:justify-between h-full">
        <nav className="space-y-3 flex flex-col">
          <button className="flex items-center rounded-lg p-2 text-white  bg-blue-600 font-bold">
            <span className="mr-2"><img src={Repo} alt="" /></span> Repositories
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Code} alt="" /></span> AI Code Review
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Cloud} alt="" /></span> Cloud Security
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Book} alt="" /></span> How to Use
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Setting} alt="" /></span> Settings
          </button>
        </nav>
    
      <div className="flex flex-col space-y-3">
      <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Phn} alt="" /></span> Support
          </button>
          <button className="flex rounded-lg p-2 items-center text-gray-600">
            <span className="mr-2"><img src={Out} alt="" /></span> Logout
          </button>
      </div>
      </div>
    </div>
    </>
);};

export default Sidebar;
