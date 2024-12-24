import React from "react";
import Quater from '../../picture/ant-design_pie-chart-filled.svg';


const LowerCard : React.FC = ()=>{
    return (
        <div className="rounded-3xl xl:w-[265px] xl:h-[164px] bg-white shadow-[0_0_24px_0_rgba(8,23,53,0.16)] flex flex-col  justify-around px-6 py-4 ">
        <div className="flex justify-between space-x-10">
            <div className="rounded-full  bg-indigo-100 w-12 h-12 flex items-center justify-center">
                <img src={Quater} alt="" />
            </div>
            <div className=" text-pretty">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M8.83203 10.6562L12.832 6.65625L16.832 10.6563" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.832 6.65625L12.832 16.9854" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="text-sm text-blue-600 font-bold">14%</p>
                </div>
                <p className="text-s text-gray-900">This week</p>
            </div>
        </div>
        <div className="">
            <p className="text-base font-bold text-Black">Issues Fixed</p>
            <h1 className="text-4xl font-bold text-black">500K+</h1>
        </div>
    </div>
    )
} 

export default LowerCard;