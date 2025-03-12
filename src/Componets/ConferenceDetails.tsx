import React from "react";
import jane1 from "../../src/assets/images/Home/20801.png";
import john1 from "../assets/images/Home/2149073882.png";
import jane2 from "../assets/images/home/129412.png";
import john2 from "../assets/images/home/2930.png";

const speakers = [
  { name: "Jane Doe", image: jane1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { name: "John Doe", image: john1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { name: "Jane Doe", image: jane2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
  { name: "John Doe", image: john2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting." },
];

const Event: React.FC = () => {
  return (
    <section className="relative text-white font-['Poppins']">
      {/* Green Background Section */}
      <div className="bg-[#30B295] py-24 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Equipping the Next Generation of Worship Leaders
          </h2>
          <p className="mt-6 text-lg md:text-xl font-light">
            Rooted in Worship is a global initiative dedicated to training and discipling young worship leaders.
            This 10-day immersive experience from <strong className="font-bold">July 9th to July 19th, 2025</strong>, in Cairo brings together
            passionate worshipers from around the world to be equipped in worship theology, worship leadership, musical excellence, and songwriting.
          </p>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Conference Dates & Location</h3>
          <p className="mt-3 text-lg md:text-xl font-medium">
            <span className="font-bold">Dates:</span> July 9–19, 2025 <br />
            <span className="font-bold">Venue:</span> Resort Beit Lel Wadi, Cairo, Egypt
          </p>
          <p className="mt-6 text-lg md:text-xl">
            <span className="font-bold">Global Networking:</span> This is a unique opportunity to connect with worship leaders worldwide.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            <span className="font-bold">Countries Represented:</span> Egypt, Kenya, Uganda, Mexico, Germany, Sri Lanka,
            Jordan, Zambia, Ukraine, Brazil, and the USA.
          </p>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Who should attend?</h3>
          <ul className="mt-4 space-y-3 text-lg md:text-xl">
            <li>○ Worship leaders, musicians, and vocalists aged 20–29.</li>
            <li>○ Individuals passionate about growing spiritually and musically.</li>
            <li>○ Those serving in church worship ministries or seeking to engage more deeply.</li>
          </ul>
        </div>
      </div>

      {/* White Background Speaker Section */}
      <div className="bg-white text-black py-32 px-6 md:px-20 relative">
        {/* Fixed Overlapping Issue - Absolute only on md+ screens */}
        <div className="relative md:absolute md:top-[-100px] left-0 w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 md:gap-12 lg:gap-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
            >
              <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden rounded-full border-4 border-[#30B295]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#30B295] mt-4">{speaker.name}</h4>
              <p className="text-sm md:text-base text-gray-600 text-center mt-2">{speaker.description}</p>
              <a href="#" className="text-[#30B295] font-semibold mt-2 block hover:underline">READ MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
