import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/Authcontext' 

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <div className="navbar bg-slate-500 ">
      <div className="navbar-start">
        <h1 className="hidden md:block">Blog Feeder</h1>

        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/create">Create blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/create">Create Blogs</Link>
          </li>
          <li>
            <Link to="/">All blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button 
            className="btn" 
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
