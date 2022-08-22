import Navbar from "../layout/navbar";
import HeroSection from "../heroSection";
import SectionSeperator from "../../assets/section-seperator";
import BusinessProgramSection from "../businessProgramSection";

import "./generalSectionStyles.scss";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <SectionSeperator previousColor="#fff" nextColor="#f6f6f7" />
        <BusinessProgramSection />
      </div>
    </>
  );
}

export default LandingPage;
