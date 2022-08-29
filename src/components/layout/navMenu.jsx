import { useState } from "react";
import MobileAuthLinks from "./mobileAuthLinks";
import SubMenu from "./subMenu";

function NavMenu({ navMenuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  function handleNavItemClick(e) {
    setIsOpen(!isOpen);
    toggleClass(e.currentTarget, "active");
  }

  function handleNavItemEnter(e) {
    setIsOpen(true);
    toggleClass(e.currentTarget, "active");
  }

  function handleNavItemLeave(e) {
    setIsOpen(false);
    toggleClass(e.currentTarget, "active");
  }

  return (
    <nav className="nav">
      <ul className={`nav__menu ${isOpen ? "nav__menu--opened" : ""}`}>
        {navMenuItems.map((item) => (
          <li
            onMouseEnter={handleNavItemEnter}
            onMouseLeave={handleNavItemLeave}
            onClick={handleNavItemClick}
            className="nav-item"
            key={item.id}
          >
            {item.type === "link" ? (
              <a className="nav-item__label" href={item.link}>
                {item.label}
              </a>
            ) : (
              <SubMenu subItems={item.subItems} label={item.label} />
            )}
          </li>
        ))}
      </ul>
      <MobileAuthLinks />
    </nav>
  );
}

export default NavMenu;
