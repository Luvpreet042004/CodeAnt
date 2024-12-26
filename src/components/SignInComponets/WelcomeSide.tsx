import React from "react";
import RightUpper from "./RightUpper";
import SigninOptions from './SIgninOpions'
import SignUpOptions from "./SignUpOptions";

interface WelcomeProps {
  view : string
}

const WelcomeSide : React.FC<WelcomeProps> = ({view})=>{
    return(
        <>
        <div className="bg-gray-100 flex flex-col space-y-0.5 rounded-lg w-[80%] lg:w-[90%]">
        <RightUpper view={view}/>
  
          {/* Sign-in Buttons */}
        {view === 'saas' ? <SigninOptions /> : <SignUpOptions />}
        </div>
  
          {/* Privacy Policy */}
          <p className="text-center text-sm text-gray-500 mt-6">
            By signing up you agree to the <a href="#" className="text-black font-bold">Privacy Policy</a>.
          </p>
      </>
    )
}

export default WelcomeSide;