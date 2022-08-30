import Sidebar from "./sidebar";
import NavMobile from "./navMobile";
import { useLocation } from "react-router-dom";

import * as sidebarIcons from "../../../assets/dashboard/sidebar";

import "./navbar.scss";

const topLinks = [
  {
    id: "home",
    label: "Home",
    icon: sidebarIcons.Home,
    address: "/app",
  },
  {
    id: "affiliate",
    label: "Affiliate",
    icon: sidebarIcons.Affiliate,

    address: "/app/affiliate",
  },
  {
    id: "solution",
    label: "Solution",
    icon: sidebarIcons.Solution,

    address: "/app/solution",
  },
  {
    id: "developer",
    label: "Developer",
    icon: sidebarIcons.Developer,

    address: "/app/developer",
  },
  {
    id: "balance",
    label: "Balance",
    icon: sidebarIcons.Balance,

    address: "/app/balance",
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: sidebarIcons.Partnership,

    address: "/app/partnership",
  },
];

const bottomLinks = [
  {
    id: "help",
    label: "Help",
    icon: sidebarIcons.Help,
    address: "/#",
  },
  {
    id: "notification",
    label: "notification",
    icon: sidebarIcons.Notification,
    address: "/#",
  },
];

function Navbar() {
  return (
    <>
      <NavMobile />
      <Sidebar topLinks={topLinks} bottomLinks={bottomLinks} />
    </>
  );
}

export default Navbar;
