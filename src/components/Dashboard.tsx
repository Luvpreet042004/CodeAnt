import React from "react";
import Sidebar from "./DashBoardComponents/SideBar";
import Repositories from "./DashBoardComponents/Repositories";

const Dashboard: React.FC = () => {
  return (
    <div className="flex relative">
      <div className="" ><Sidebar /></div>
      <div className="flex-grow items-center">
        <Repositories />
      </div>
    </div>
  );
};

export default Dashboard;
