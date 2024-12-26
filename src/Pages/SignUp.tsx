import React from "react";
import LeftSection from "../components/SignInComponets/LeftSection";
import WelcomeSide from "../components/SignInComponets/WelcomeSide";

const SignUp : React.FC = () => {
    return (
        <div className="lg:grid grid-cols-2">
        <LeftSection/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <WelcomeSide view = "signup"/>
        </div>
        </div>
    )
}

export default SignUp;