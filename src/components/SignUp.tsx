import React from "react";
import LeftSection from "./SignInComponets/LeftSection";
import WelcomeSide from "./SignInComponets/WelcomeSide";

const SignUp : React.FC = () => {
    return (
        <div className="lg:grid grid-cols-2">
        <LeftSection/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <WelcomeSide/>
        </div>
        </div>
    )
}

export default SignUp;