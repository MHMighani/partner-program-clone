import { useState } from "react";
import NavMenu from "./navMenu";
import AuthLink from "./authLinks";
import NavLogo from "../../../assets/businessIntro/partner-programs-logo.svg";
import { ReactComponent as LivechatLogo } from "../../../assets/businessIntro/livechat.svg";
import { ReactComponent as ChatbotLogo } from "../../../assets/businessIntro/chatbot.svg";
import HamburgerBtn from "../../common/hamburgerBtn/hamburgerBtn";

import "./navbar.scss";

function NavbarLogo() {
  return (
    <a href="/" className="navbar__logo">
      <img className="image" src={NavLogo} alt="partner program logo" />
    </a>
  );
}

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleNavState() {
    setIsExpanded(!isExpanded);
  }

  const livechatLinkContent = (
    <>
      <LivechatLogo className="icon" />
      LiveChat
    </>
  );

  const chatbotLinkContent = (
    <>
      <ChatbotLogo className="icon" />
      ChatBot
    </>
  );

  const navMenuItems = [
    {
      id: "partnerships",
      type: "button",
      label: "Partnerships",
      subItems: [
        { id: "solution", label: "Solution Program", link: "#" },
        { id: "affiliate", label: "Affiliate Program", link: "#" },
      ],
    },
    {
      id: "products",
      type: "button",
      label: "Products",
      subItems: [
        { id: "livechat", label: livechatLinkContent, link: "#" },
        { id: "chatbot", label: chatbotLinkContent, link: "#" },
      ],
    },
    { id: "blog", type: "link", label: "Blog", link: "#" },
    { id: "help", type: "link", label: "Help Center", link: "#" },
  ];
  return (
    <div className="navbar">
      <div
        className={`navbar__content ${isExpanded ? "navbar--expanded" : ""}`}
      >
        <NavbarLogo />
        <NavMenu navMenuItems={navMenuItems} />
        <AuthLink />
        <HamburgerBtn onBtnClick={handleNavState} />
      </div>
    </div>
  );
}

export default Navbar;
