import React from "react";
import WelcomeSide from "./SignInComponets/WelcomeSide";
import LeftSection from "./SignInComponets/LeftSection";

const SignIn : React.FC = () => {
    return (
        <div className="lg:grid grid-cols-2">
        <LeftSection/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <WelcomeSide view = "saas" />
        </div>
        </div>
    )
}

export default SignIn;