import React from 'react';
import { Link } from 'react-router-dom';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        WELCOME TO
        <span className="bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
          {" "}
          BELTEI INTERNATIONAL UNIVERSITY
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-red-600 opacity-50 max-w-4xl">
        BELTEI International University has 5 major programs: 1- English and Computer | 2- Associate Degree | 3- Bachelor Degree | 4- Master's Degree | 5- Doctoral degree
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/register"
          className="bg-gradient-to-r from-blue-400 to-red-500 py-3 px-4 mx-3 rounded-md active:text-orange-500"
        >
          Register
        </Link>
        <a href="https://www.beltei.edu.kh/biu/admission/price" className="py-3 px-4 mx-3 rounded-md border active:text-orange-500">
          Information
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
       
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
       
        </video>
      </div>
    </div>
  );
};

export default HeroSection;