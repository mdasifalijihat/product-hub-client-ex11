import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { AuthContext } from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out",
          text: "You have been logged out successfully.",
          confirmButtonColor: "#ff6254",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong during logout.",
        });
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white px-3 py-2 rounded-md"
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white px-3 py-2 rounded-md"
          to={"/queries"}
        >
          Queries
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white px-3 py-2 rounded-md"
              to={"/recomendations"}
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white px-3 py-2 rounded-md"
              to={"/myQueries"}
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white px-3 py-2 rounded-md"
              to={"/myRecommendations"}
            >
              My recommendations
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-[rgb(255,98,84)]">
      <div className="navbar  text-white shadow-md container mx-auto">
        <div className="navbar-start">
           {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                           <HiMenuAlt1 size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
            {/* Brand Name */}
          <Link className="btn btn-ghost text-xl" to={"/"}>
            {" "}
            ProductQueryHub{" "}
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
          {/* Right Side */}
        <div className="navbar-end">
          <div className="mx-1 md:mx-4 pt-2">
            <ThemeToggle />
          </div>
          {user ? (
            <>
              <button
                className="mr-3 btn bg-white text-[rgb(255,98,84)] border-none hover:bg-gray-200"
                onClick={handleLogOut}
              >
                {" "}
                log Out
              </button>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className="btn hover:bg-[rgb(255,98,84)] hover:text-white"
            >
              Log-in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
