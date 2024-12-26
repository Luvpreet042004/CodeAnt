import React from "react";
import { useNavigate } from "react-router-dom";

interface SigninButtonProps {
    picture: string; // URL of the PNG file as a string
    app: string;     // Name of the app as a string
}

const SigninButton: React.FC<SigninButtonProps> = ({ picture, app }) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <button 
            onClick={() => handleNavigation('/dashboard')} 
            className="flex items-center justify-center w-[90%] sm:w-2/3 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50"
        >
            <img src={picture} alt={`${app} logo`} className="w-5 h-5 mr-2" />
            Sign in with {app}
        </button>
    );
};

export default SigninButton;
