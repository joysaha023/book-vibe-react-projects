import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#23BE0A] border font-semibold border-[#23BE0A]"
              : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listedBooks"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#23BE0A] border font-semibold border-[#23BE0A]"
              : "font-medium"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pageRead"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#23BE0A] border font-semibold border-[#23BE0A]"
              : "font-medium"
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/authorSec"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#23BE0A] border font-semibold border-[#23BE0A]"
              : "font-medium"
          }
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#23BE0A] border font-semibold border-[#23BE0A]"
              : "font-medium"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-6xl mx-auto  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] gap-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
            <li>
              <a>Sign in</a>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost hover:bg-white font-bold text-xl md:text-3xl">
          Book Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-md bg-[#23BE0A] hover:text-black hidden md:flex text-white">
          Sign In
        </a>
        <a className="btn btn-sm md:btn-md bg-[#59C6D2] text-xs lg:text-base hover:text-black text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
