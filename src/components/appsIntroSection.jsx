import SectionTitle from "./common/sectionTitle";
import AppIntroCard from "./common/appIntroCard";
import { ReactComponent as LivechatLogo } from "../assets/livechat.svg";
import { ReactComponent as ChatbotLogo } from "../assets/chatbot.svg";

function AppsIntroSection() {
  // general section details
  const sectionDetails = {
    title: "Apps you’re going to love working with",
    description: "description",
  };

  // chat intro-cards details
  const livechatDetails = {
    logo: <LivechatLogo />,
    description:
      "A complete customer service platform for connecting with customers and boosting sales.",
    linkLabel: "Discover LiveChat",
    linkAddress: "#",
  };

  const chatbotDetails = {
    logo: <ChatbotLogo />,
    description:
      "An all-in-one platform for building and launching chatbots without coding.",
    linkLabel: "Discover ChatBot",
    linkAddress: "#",
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
