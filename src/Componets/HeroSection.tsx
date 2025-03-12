import React from "react";
import { Link } from "react-router-dom";
import buttonImage from "../assets/images/Home/get involved.png"; // Adjust the path if necessary

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/baba-mwema.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Rooted in Worship Conference Cairo 2025
        </h1>

        {/* Button as Image (Navigates to Register Page) */}
        <Link to="/register" className="inline-block">
          <img
            src={buttonImage}
            alt="Sign-Up Now"
            className="w-48 md:w-64 rounded-full transition duration-300 transform hover:scale-105"
          />
        </Link>

        <p className="mt-4 text-lg md:text-xl">Scroll down to registration link</p>
      </div>
    </div>
  );
};

export default Hero;
