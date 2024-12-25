import React from "react";
import Github from '../../picture/Github.png'
import Azure from '../../picture/Azure.png'
import BitBucket from '../../picture/Bitbucket.png'
import Gitlab from '../../picture/Gitlab.png'
import SigninButton from "./SigninButtons";

const SigninOptions :React.FC = ()=>{
    return (
        <div className="space-y-4 flex flex-col items-center justify-center bg-white p-6 rounded-b-lg shadow-lg">
            <SigninButton picture={Github} app = "Github" />
            <SigninButton picture={Azure} app = "Azure Devops" />
            <SigninButton picture={BitBucket} app = "BitBucket" />
            <SigninButton picture={Gitlab} app = "Gitlab" />
          </div>
    )
}

export default SigninOptions;