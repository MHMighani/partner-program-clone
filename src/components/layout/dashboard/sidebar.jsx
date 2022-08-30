import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./userMenu";
import Popup from "reactjs-popup";

function NavList({ name, links, handleClick }) {
  const location = useLocation();

  return (
    <ul className={`sidebar__list ${name}`}>
      {links.map((item) => (
        <Link key={item.id} to={item.address}>
          <li
            className={`${
              location.pathname == item.address ? "active" : ""
            } sidebar__item`}
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
  return (
    <div>
      <Popup
        trigger={
          <div className="sidebar__item avatar">
            <span>{text}</span>
          </div>
        }
        on="click"
        position="right bottom"
      >
        <UserMenu />
      </Popup>
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
