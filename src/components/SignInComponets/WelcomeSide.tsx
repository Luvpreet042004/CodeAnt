import React from "react";
import Github from '../../picture/Github.png'
import Azure from '../../picture/Azure.png'
import BitBucket from '../../picture/Bitbucket.png'
import Gitlab from '../../picture/Gitlab.png'
import RightUpper from "./RightUpper";
import SigninButton from "./SigninButtons";


const WelcomeSide : React.FC = ()=>{
    return(
        <>
        <div className="bg-gray-100 flex flex-col space-y-0.5 rounded-lg sm:w-[80%] lg:w-[90%]">
        <RightUpper/>
  
          {/* Sign-in Buttons */}
          <div className="space-y-4 flex flex-col items-center justify-center bg-white p-6 rounded-b-lg shadow-lg">
            <SigninButton picture={Github} app = "Github" />
            <SigninButton picture={Azure} app = "Azure Devops" />
            <SigninButton picture={BitBucket} app = "BitBucket" />
            <SigninButton picture={Gitlab} app = "Gitlab" />
          </div>
        </div>
  
          {/* Privacy Policy */}
          <p className="text-center text-sm text-gray-500 mt-6">
            By signing up you agree to the <a href="#" className="text-black font-bold">Privacy Policy</a>.
          </p>
      </>
    )
}

export default WelcomeSide;