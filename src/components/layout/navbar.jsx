import NavMenu from "./navMenu";
import AuthButtons from "./authButtons";
import { ReactComponent as NavLogo } from "../../assets/navbar-logo.svg";

function NavbarLogo() {
  return <NavLogo />;
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
        <AuthButtons />
        <NavMenu navMenuItems={navMenuItems} />
        <NavbarLogo />
      </div>
    </div>
  );
}

export default Navbar;
