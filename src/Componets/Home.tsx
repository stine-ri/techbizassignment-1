import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutConference from "./ConferenceDetails";
import KeyHighlights from "./Keyhighlights";
import Registration from "./Registration";

const HomePage = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutConference />
      <KeyHighlights />
      <Registration />
    </div>
  );
};

export default HomePage;