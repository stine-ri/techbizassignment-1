import React from "react";
import trainingImage from "../assets/images/Home/11711.png";
import communityImage from "../assets/images/Home/asset-1.png";
import rehearsalImage from "../assets/images/Home/asset-2.png";

const highlights = [
  {
    image: trainingImage,
    title: "Training Sessions",
    description:
      "Worship theology, practical musicianship, leadership development, and songwriting.",
  },
  {
    image: communityImage,
    title: "Global Community",
    description: "Connect with worship leaders from 10+ countries.",
  },
  {
    image: rehearsalImage,
    title: "Rehearsals & Evangelism",
    description:
      "Hands-on training and outreach experience. Mentorship: Learn from experienced worship leaders and instructors.",
  },
];

const KeyHighlights: React.FC = () => {
  return (
    <section className="bg-[#30B295] py-12 px-4 md:px-8 font-['Poppins']">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
        Key Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((highlight, index) => (
          <div key={index} className="text-center">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-black font-bold text-lg mt-4">{highlight.title}</h3>
            <p className="text-white mt-2">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
