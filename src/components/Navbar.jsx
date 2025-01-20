import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className=" py-3 border-b border-red-500">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 px-5">
            <img className="h-10 w-9 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-blue-400">BIU UNIVERSITY</span>
          </div>
          <ul className="hidden lg:flex items-center space-x-12 text-blue-400 text-base mr-[15rem]">
            <li className={`font-medium hover:text-red-400 ${location.pathname === '/' ? 'border-b-2 border-red-500' : ''}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`font-medium hover:text-red-400 ${location.pathname === '/about' ? 'border-b-2 border-red-500' : ''}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`font-medium hover:text-red-400 ${location.pathname === '/contact' ? 'border-b-2 border-red-500' : ''}`}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-medium hover:text-black hover:bg-blue-300 text-white rl-[6rem] bg-pink-500 rounded-md p-2">
              
              <Link to="/login">Admin Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;