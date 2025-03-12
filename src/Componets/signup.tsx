import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Componets/Header"; // Ensure this path is correct
import iconAttach from "../assets/images/Registration/attach.png"; 
import signUpBtn from "../assets/images/Registration/get involved.png"; 

const Registration: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Include Header */}
      <Header />

      {/* Registration Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-6 font-['Poppins'] bg-[#30B295] min-h-screen">
        <h2 className="text-3xl font-bold text-white">Registration & Scholarship</h2>
        <p className="text-white mt-3 text-sm md:text-base">
          Sign up now to be part of this life-changing experience! <br />
          Information on limited scholarships available for qualified participants.
        </p>

        {/* Form */}
        <form className="w-full max-w-lg mt-6 space-y-4">
          {/* Input Fields */}
          {[
            "First Name",
            "Surname",
            "Preferred Name",
            "Age",
            "Email Address",
            "Phone Number",
            "City",
            "Tell us a little about yourself",
            "Tell us about your faith",
            "What church or fellowship do you attend?",
            "Please provide the name and contact of a pastor who will act as your referrer",
            "What is your music involvement in church?",
            "What is your music involvement outside church?",
          ].map((placeholder, index) => (
            <input
              key={index}
              type="text"
              placeholder={placeholder}
              className="w-full bg-white text-gray-700 px-5 py-3 rounded-full focus:outline-none"
            />
          ))}

          {/* Country Dropdown */}
          <select className="w-full bg-white text-gray-700 px-5 py-3 rounded-full focus:outline-none">
            <option>Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Egypt</option>
            {/* Add more countries */}
          </select>

          {/* Scholarship Question */}
          <div className="text-left text-white">
            <p className="mb-2">Would you like to apply for a scholarship for the training?</p>
            <label className="mr-4">
              <input type="radio" name="scholarship" value="yes" className="mr-2" /> Yes
            </label>
            <label>
              <input type="radio" name="scholarship" value="no" className="mr-2" /> No
            </label>
          </div>

          {/* Spoken English Level */}
          <div className="text-left text-white">
            <p className="mb-2">What level is your spoken English?</p>
            <label className="mr-4">
              <input type="radio" name="english" value="beginner" className="mr-2" /> Beginner
            </label>
            <label className="mr-4">
              <input type="radio" name="english" value="intermediate" className="mr-2" /> Intermediate
            </label>
            <label>
              <input type="radio" name="english" value="fully" className="mr-2" /> Fully
            </label>
          </div>

          {/* Serving Capacity */}
          <div className="text-left text-white">
            <p className="mb-2">Do you serve in any capacity?</p>
            <label className="mr-4">
              <input type="radio" name="serve" value="yes" className="mr-2" /> Yes
            </label>
            <label>
              <input type="radio" name="serve" value="no" className="mr-2" /> No
            </label>
          </div>

          {/* Skill Level Dropdown */}
          <select className="w-full bg-white text-gray-700 px-5 py-3 rounded-full focus:outline-none">
            <option>What is your skill level?</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          {/* File Upload */}
          <div className="relative">
            <img src={iconAttach} alt="Attach Icon" className="absolute left-4 top-3 w-5 h-5" />
            <input
              type="file"
              className="w-full bg-white text-gray-700 px-10 py-3 rounded-full focus:outline-none cursor-pointer"
            />
          </div>

          {/* Sign-Up Button */}
          <div className="mt-5 flex justify-center">
            <img
              src={signUpBtn}
              alt="Sign Up"
              className="cursor-pointer w-40"
              onClick={() => navigate("/register")}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Registration;
