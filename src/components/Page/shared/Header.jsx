import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./header.css";
import { HiHomeModern } from "react-icons/hi2";
import { AuthContext } from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";
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
          className="hover:bg-[rgb(255,98,84)] hover:text-white mr-2"
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white mr-2"
          to={"/queries"}
        >
          Queries
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white mr-2"
              to={"/recomendations"}
            >
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white mr-2"
              to={"/myQueries"}
            >
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-[rgb(255,98,84)] hover:text-white mr-2"
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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiHomeModern size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to={'/'}>  ProductQueryHub </Link>          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button className="mr-3 btn hover:bg-[rgb(255,98,84)] hover:text-white" onClick={handleLogOut}> log Out</button>
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
