import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./userMenu";
import { useLocation } from "react-router-dom";

function NavList({ name, links, handleClick }) {
  const location = useLocation();

  return (
    <ul className={`sidebar__list ${name}`}>
      {links.map((item) => (
        <Link to={item.address}>
          <li
            className={`${
              location.pathname == item.address ? "active" : ""
            } sidebar__item`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <img className="sidebar__icon" src={item.icon} alt={item.label} />
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
}

function Avatar({ text }) {
  const userMenuRef = useRef();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowUserMenu(!showUserMenu)}
        to="/app/account"
        className="sidebar__item avatar"
      >
        <span>{text}</span>
      </div>
      <UserMenu show={showUserMenu} />
    </div>
  );
}

function Sidebar({ topLinks, bottomLinks }) {
  const [topLinksState, setTopLinksState] = useState(topLinks);

  function handleNavItemClick(id) {
    setTopLinksState((topLinks) =>
      topLinks.map(({ ...item }) => {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
  }

  return (
    <nav className="sidebar">
      <NavList
        handleClick={handleNavItemClick}
        name="sidebar__top"
        links={topLinksState}
      />
      <NavList name="sidebar__bottom" links={bottomLinks} />
      <Avatar text="MM" />
    </nav>
  );
}

export default Sidebar;
