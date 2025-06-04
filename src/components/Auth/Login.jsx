import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginLottie from "../../../public/login.json";
import { Link, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLoginFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Log-in Successful!",
          text: "You have successfully Log-in.",
          icon: "success",
          confirmButtonColor: '#ff6254', 
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Log-in Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col-reverse lg:flex-row items-center">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleLoginFrom} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(255,98,84)]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(255,98,84)]"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(255,98,84)] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>

          {/* Register Link */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[rgb(255,98,84)] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 flex justify-center items-center">
          <Lottie
            animationData={loginLottie}
            loop={true}
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
