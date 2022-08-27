import { useState } from "react";
import * as sidebarIcons from "../../../assets/dashboard/sidebar";

function NavList({ name, links, handleClick }) {
  return (
    <ul className={`sidebar__list ${name}`}>
      {links.map((item) => (
        <li
          className={`${item.active ? "active" : ""} sidebar__item`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <img className="sidebar__icon" src={item.icon} alt={item.label} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

function Sidebar() {
  const topLinks = [
    {
      id: "home",
      label: "Home",
      icon: sidebarIcons.Home,
      active: true,
    },
    {
      id: "affiliate",
      label: "Affiliate",
      icon: sidebarIcons.Affiliate,
      active: false,
    },
    {
      id: "solution",
      label: "Solution",
      icon: sidebarIcons.Solution,
      active: false,
    },
    {
      id: "developer",
      label: "Developer",
      icon: sidebarIcons.Developer,
      active: false,
    },
    {
      id: "balance",
      label: "Balance",
      icon: sidebarIcons.Balance,
      active: false,
    },
    {
      id: "partnership",
      label: "Partnership",
      icon: sidebarIcons.Partnership,
      active: false,
    },
  ];

  const bottomLinks = [
    {
      id: "help",
      label: "Help",
      icon: sidebarIcons.Help,
    },
    {
      id: "notification",
      label: "notification",
      icon: sidebarIcons.Notification,
    },
  ];

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
    </nav>
  );
}

export default Sidebar;
