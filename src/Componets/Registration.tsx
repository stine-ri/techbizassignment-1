import React from "react";
import { useNavigate } from "react-router-dom";
import buttonImage from "../assets/images/Home/get involved-1.png"; // Replace with your actual button image

const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center py-12 px-6 font-['Poppins']">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-600">
        Registration & Scholarship
      </h2>
      <p className="text-gray-700 mt-3 text-sm md:text-base">
        Sign up now to be part of this life-changing experience! <br />
        Information on limited scholarships available for qualified participants.
      </p>

      {/* Button with Image */}
      <button
        onClick={() => navigate("/register")}
        className="mt-5 relative flex items-center justify-center"
      >
        <img
          src={buttonImage}
          alt="Sign Up Now"
          className="w-48 md:w-56 transition-transform duration-300 transform hover:scale-105"
        />
      </button>
    </section>
  );
};

export default Registration;
