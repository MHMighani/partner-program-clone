import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PartnerProgramLogo from "../../../assets/dashboard/partner-programs-logo.svg";
import HamburgerBtn from "../../common/hamburgerBtn/hamburgerBtn";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";

const links = [
  {
    id: "Home",
    label: "Home",
    address: "/app/",
    subLinks: [],
  },
  {
    id: "pfofileSettings",
    label: "profile settings",

    address: "/app/account/",
    subLinks: [
      {
        label: "profile settings",
        id: "profileSettings",
        address: "/app/account/",
      },
      {
        label: "Billing",
        id: "billing",
        address: "/app/account/billing",
      },
      {
        label: "Email preferences",
        id: "emails",
        address: "/app/account/emails",
      },
      {
        label: "security",
        id: "security",
        address: "/app/account/security",
      },
      {
        label: "API tokens",
        id: "token",
        address: "/app/account/token",
      },
    ],
  },
];

function NavMobile() {
  const [isopen, setIsopen] = useState(false);
  const route = useLocation();
  const [navLinks, setNavLinks] = useState({ header: "", links });

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
          {navLinks.header && (
            <div onClick={() => setNavLinks({ header: "", links })}>
              <div className="nav-menu__item header">
                <span className="arrow">
                  <FaArrowLeft color="white" />
                </span>
                {navLinks.header}
              </div>
            </div>
          )}
          {navLinks.links.map((item) => {
            // if item has subLinks
            if (item.subLinks?.length) {
              return (
                <div
                  key={item.address}
                  onClick={() =>
                    setNavLinks({
                      header: "profile settings",
                      links: item.subLinks,
                    })
                  }
                  className="nav-menu__item"
                >
                  {item.label}
                  <FaChevronRight />
                </div>
              );
            }
            return (
              // if item does not have sub-links
              <Link
                key={item.address}
                to={item.address}
                className={`nav-menu__item ${
                  item.address === route.pathname ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavMobile;
