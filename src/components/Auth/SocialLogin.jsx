import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = use(AuthContext);

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonColor: "#ff6254",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
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
