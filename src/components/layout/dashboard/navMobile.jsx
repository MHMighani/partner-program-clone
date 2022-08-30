import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PartnerProgramLogo from "../../../assets/dashboard/partner-programs-logo.svg";
import HamburgerBtn from "../../common/hamburgerBtn/hamburgerBtn";

const links = [
  {
    id: "Home",
    label: "Home",
    address: "/app/",
  },
  {
    id: "pfoeilSettings",
    label: "profile settings",

    address: "/app/account/",
  },
];

function NavMobile() {
  const [isopen, setIsopen] = useState(false);
  const route = useLocation();

  return (
    <div className={`nav-mobile-wrapper ${isopen && "open"}`}>
      <nav className="nav-mobile">
        <img
          className="logo"
          src={PartnerProgramLogo}
          alt="partner program logo"
        />
        <HamburgerBtn onBtnClick={() => setIsopen(!isopen)} />
      </nav>
      {isopen && (
        <ul className="nav-menu">
          {links.map((item) => (
            <Link
              to={item.address}
              className={`nav-menu__item ${
                item.address === route.pathname ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavMobile;
