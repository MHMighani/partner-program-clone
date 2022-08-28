import SectionTitle from "../common/sectionTitle";
import LivechatLogo from "../../assets/businessIntro/appIntroSection/livechat-logo.svg";
import ChatbotLogo from "../../assets/businessIntro/appIntroSection/chatbot-logo.svg";
import * as images from "../../assets/businessIntro/appIntroSection";

import "./appIntroSection.scss";

function AppIntroCard({ introDetails }) {
  return (
    <div className="app-intro-card">
      <div className="intro">
        <img
          className="logo"
          src={introDetails.logo}
          alt={`${introDetails.name} logo`}
        />

        <p className="intro__description">{introDetails.description}</p>
        <a href={introDetails.linkAddress} className="btn btn--dark">
          {introDetails.linkLabel}
        </a>
      </div>
      <div className="app-preview">
        <img
          className="desktop-image"
          src={introDetails.desktopImage}
          alt={introDetails.name}
        />
        <img
          className="tablet-image"
          src={introDetails.tabletImage}
          alt={introDetails.name}
        />
        <img
          className="mobile-image"
          src={introDetails.mobileImage}
          alt={introDetails.name}
        />
      </div>
    </div>
  );
}

function AppsIntroSection() {
  // general section details
  const sectionDetails = {
    title: "Apps you’re going to love working with",
    description: (
      <>
        Excellent alone, powerful when combined.
        <br />
        Meet the products from our customer service suite.
      </>
    ),
  };

  // chat intro-cards details
  const livechatDetails = {
    name: "livechat",
    logo: LivechatLogo,
    description:
      "A complete customer service platform for connecting with customers and boosting sales.",
    linkLabel: "Discover LiveChat",
    desktopImage: images.LivechatDesktopImage,
    tabletImage: images.LivechatTabletImage,
    mobileImage: images.LivechatMobileImage,
    linkAddress: "#",
  };

  const chatbotDetails = {
    name: "chatbot",
    logo: ChatbotLogo,
    description:
      "An all-in-one platform for building and launching chatbots without coding.",
    linkLabel: "Discover ChatBot",
    linkAddress: "#",
    desktopImage: images.ChatbotDesktopImage,
    tabletImage: images.ChatbotTabletImage,
    mobileImage: images.ChatbotMobileImage,
  };

  return (
    <section className="app-intro-section">
      <div className="intro container">
        <SectionTitle title={sectionDetails.title} size="h2" />
        <p className="description">{sectionDetails.description}</p>
      </div>
      <div className="app-intro-cards container">
        <AppIntroCard introDetails={livechatDetails} />
        <AppIntroCard introDetails={chatbotDetails} />
      </div>
      <div className="grey-background"></div>
    </section>
  );
}

export default AppsIntroSection;
