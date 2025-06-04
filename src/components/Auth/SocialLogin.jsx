import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Integrate your Google Auth logic here
    };

    return (
        <div className="mt-6 text-center">
            <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-full  mx-auto border border-gray-300 rounded-lg py-2 px-4 hover:shadow-md transition duration-200"
            >
                <FcGoogle className="text-2xl mr-2" />
                <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;
