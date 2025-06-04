import React, { use } from "react";
import { NavLink } from "react-router";
import "./header.css";
import { HiHomeModern } from "react-icons/hi2";
import { AuthContext } from "../../../AuthContext/AuthContext";
const Header = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const hanldeLogOut =() => {
    
  }
  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white"
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white"
          to={"/queries"}
        >
          Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white"
          to={"/recomendations"}
        >
          Recommendations For Me
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white"
          to={"/myQueries"}
        >
          My Queries
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[rgb(255,98,84)] hover:text-white"
          to={"/myRecommendations"}
        >
          My recommendations
        </NavLink>
      </li>
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
          <a className="btn btn-ghost text-xl"> Product </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={hanldeLogOut}> log Out</button>
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
