import Navbar from "../layout/navbar";
import HeroSection from "../heroSection";
import SectionSeperator from "../../assets/section-seperator";
import BusinessProgramSection from "../businessProgramSection";
import QuoteOne from "../quoteOne";

import "./generalSectionStyles.scss";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="app-wrapper">
        <HeroSection />
        <SectionSeperator previousColor="#fff" nextColor="#f6f6f7" />
        <BusinessProgramSection />
        <SectionSeperator previousColor="#f6f6f7" nextColor="#fff" />
        <QuoteOne />
      </div>
    </>
  );
}

export default LandingPage;
