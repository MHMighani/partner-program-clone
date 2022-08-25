import SectionTitle from "../common/sectionTitle";
import AppIntroCard from "../common/appIntroCard";
import { ReactComponent as LivechatLogo } from "../../assets/businessIntro/livechat.svg";
import { ReactComponent as ChatbotLogo } from "../../assets/businessIntro/chatbot.svg";
import * as images from "../../assets/businessIntro/appIntroSection";

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
    logo: <LivechatLogo />,
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
    logo: <ChatbotLogo />,
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
      <div>
        <SectionTitle title={sectionDetails.title} />
        <p>{sectionDetails.description}</p>
      </div>
      <div className="app-intro-cards">
        <AppIntroCard introDetails={livechatDetails} />
        <AppIntroCard introDetails={chatbotDetails} />
      </div>
    </section>
  );
}

export default AppsIntroSection;
