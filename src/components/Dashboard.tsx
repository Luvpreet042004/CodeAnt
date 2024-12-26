import React from "react";
import Sidebar from "./DashBoardComponents/SideBar";
import Repositories from "./DashBoardComponents/Repositories";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col sapce-y-2 lg:flex-row justify-center lg:justify-between bg-gray-500 lg:bg-blue-50">
   <div className="flex lg:w-1/5">
   <Sidebar/>
    </div>
   <div className="flex rounded-xl w-full lg:w-4/5 justify-center">
   <Repositories/>
   </div>
   </div>
  );
};

export default Dashboard;
