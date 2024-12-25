import React from "react";
import Subtract from '../../picture/Subtract.svg'
import Repo from '../../picture/Repo.svg'
import Code from '../../picture/Code.svg'
import Cloud from '../../picture/Cloud.svg'
import Book from '../../picture/Book.svg'
import Setting from '../../picture/Setting.svg'
import Phn from '../../picture/Phn.svg'
import Out from '../../picture/Out.svg'

const Sidebar: React.FC = () => {
  return (
    <div className=" bg-white fixed w-1/5 rounded-xl h-screen p-4 flex flex-col">
        <div>
        <div className="flex items-center space-x-2 mb-8">
            <img src={Subtract} alt="" />
        <span className="font-bold text-xl">CodeAnt AI</span>
      </div>
      <div className="space-y-6">
        <div className="bg-gray-200 rounded-lg py-2 px-3">
          <select className="bg-gray-200 w-full focus:outline-none">
            <option></option>
          </select>
        </div>
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
        </div>
    </div>
    
      <div className="absolute bottom-8 space-y-4">
        <button className="flex items-center text-gray-600">
          <span className="mr-2"><img src={Phn} alt="" /></span> Support
        </button>
        <button className="flex items-center text-gray-600">
          <span className="mr-2"><img src={Out} alt="" /></span> Logout
        </button>
      </div>
    </div>
);};

export default Sidebar;
