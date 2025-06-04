import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottie from "../../../public/register.json";
import { Link, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegisterFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;
    console.log(name, email, password, url);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Registration Successful!",
          text: "You have successfully registered.",
          icon: "success",
          confirmButtonText: "Go to Home",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Registration Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col-reverse lg:flex-row items-center">
        {/* Register Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Create Account
          </h2>
          <form onSubmit={handleRegisterFrom} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 text-gray-600">Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(255,98,84)]"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(255,98,84)]"
                placeholder="Create a password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-gray-600">Photo URL</label>
              <input
                type="url"
                name="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(255,98,84)]"
                placeholder="Paste your photo URL"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[rgb(255,98,84)] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>

          {/* Already Registered? */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[rgb(255,98,84)] font-medium hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 flex justify-center items-center">
          <Lottie
            animationData={registerLottie}
            loop={true}
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
