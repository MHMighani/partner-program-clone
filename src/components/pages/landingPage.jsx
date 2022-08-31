import Navbar from "../layout/businessIntro/navbar";
import HeroSection from "../sections/heroSection";
import SectionSeperator from "../../assets/businessIntro/section-seperator";
import BusinessProgramSection from "../sections/businessProgramSection";
import QuoteOne from "../sections/quoteOne";
import AppsIntroSection from "../sections/appsIntroSection";
import PartnersLogos from "../sections/partnersLogos";
import PartnersSection from "../sections/partnersSection";
import QuoteTwo from "../sections/quoteTwo";
import Prefooter from "../sections/prefooter";
import Footer from "../layout/businessIntro/footer";

import "./generalSectionStyles.scss";

function LandingPage() {
  return (
    <div className="business-intro">
      <Navbar />
      <div className="app-wrapper">
        <HeroSection />
        <SectionSeperator previousColor="#fff" nextColor="#f6f6f7" />
        <BusinessProgramSection />
        <SectionSeperator previousColor="#f6f6f7" nextColor="#ffd000" />
        <QuoteOne />
        <SectionSeperator previousColor="#ffd000" nextColor="#fff" />
        <AppsIntroSection />
        <PartnersLogos />
        <SectionSeperator previousColor="#f6f6f7" nextColor="#fff" />
        <PartnersSection />
        <SectionSeperator previousColor="#f6f6f7" nextColor="#fff" />
        <QuoteTwo />
        <SectionSeperator previousColor="#fff" nextColor="#ffd000" />
        <Prefooter />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
