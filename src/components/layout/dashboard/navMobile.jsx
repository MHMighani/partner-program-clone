import { useState } from "react";
import PartnerProgramLogo from "../../../assets/dashboard/partner-programs-logo.svg";
import HamburgerBtn from "../../common/hamburgerBtn/hamburgerBtn";

function NavMobile() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="nav-mobile-wrapper">
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
          <li className="nav-menu__item">one</li>
          <li className="nav-menu__item">two</li>
        </ul>
      )}
    </div>
  );
}

export default NavMobile;
