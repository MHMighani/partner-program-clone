import NavMenu from "./navMenu";
import AuthLink from "./authLinks";
import { ReactComponent as NavLogo } from "../../assets/navbar-logo.svg";

import "./navbar.scss";

function NavbarLogo() {
  return (
    <a href="#" className="navbarLogo">
      <NavLogo />
    </a>
  );
}

function Navbar() {
  const navMenuItems = [
    { id: "help", type: "link", label: "Help Center", link: "#" },
    { id: "blog", type: "link", label: "Blog", link: "#" },
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
        { id: "livechat", label: "LiveChat", link: "#" },
        { id: "chatbot", label: "ChatBot", link: "#" },
      ],
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__content">
        <NavbarLogo />
        <NavMenu navMenuItems={navMenuItems} />
        <AuthLink />
      </div>
    </div>
  );
}

export default Navbar;
