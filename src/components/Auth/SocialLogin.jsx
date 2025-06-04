import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthContext/AuthContext";

const SocialLogin = () => {

    const {googleLogin} = use(AuthContext)
    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        googleLogin().then(result=> {
            console.log(result.user)

        }).catch(error =>{
            console.log(error)
        })
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
