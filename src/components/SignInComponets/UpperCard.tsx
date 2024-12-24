import React from "react";
import Subtract from '../../picture/Subtract.svg';
 

const UpperCard : React.FC = ()=>{
    return(
      // outer div
      <div className="flex bg-[#E6E8F0] font-inter rounded-3xl flex-col items-center space-y-0.5 shadow-[0_0_24px_0_rgba(8,23,53,0.16)] xl:w-[447px] xl:h-[170px]">

        {/* AI to Detect & Autofix Bad Code BOX */}
        <div className="flex bg-white rounded-t-3xl items-center pl-4 space-x-2 w-full py-4 ">
        <img src={Subtract} className="w-10 h-10" alt="Icon" />
            <h2 className="text-l font-bold text-gray-800">
              AI to Detect & Autofix Bad Code
            </h2>
        </div>

        {/* stats */}
        <div className="lg:flex min-w-70 rounded-b-3xl justify-between bg-white items-center w-full p-4 space-x-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">30+</h1>
              <p className="text-gray-600">Language Support</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">10K+</h1>
              <p className="text-gray-600">Developers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold">100K+</h1>
              <p className="text-gray-600">Hours Saved</p>
            </div>
        </div>
        
      </div>
    )
}

export default UpperCard;