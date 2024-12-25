import React from "react";
import GitLab from '../../picture/Gitlab.png'
import Icon from '../../picture/Icon.svg'

const SignUpOptions : React.FC = ()=>{
    return (
        < div className="space-y-4 flex flex-col items-center justify-center bg-white p-6 rounded-b-lg shadow-lg">
        <button className="flex items-center justify-center w-[90%] sm:w-2/3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50">
              <img src={GitLab} alt="GitHub" className="w-5 h-5 mr-2" />
              Self Hosted GitLab
        </button>
        <button className="flex items-center justify-center w-[90%] sm:w-2/3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50">
              <img src={Icon} alt="GitHub" className="w-5 h-5 mr-2" />
              Sign in with SSO
        </button>
        </div>
    )
}


export default SignUpOptions;