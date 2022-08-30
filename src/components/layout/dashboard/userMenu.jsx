import { Link } from "react-router-dom";

import "./userMenu.scss";

const menuItems = [
  {
    id: "user",
    content: (
      <Link to="/app/account" className="general">
        <div className="avatar"></div>
        <div>
          <div className="user-name">user's name</div>
          <div className="user-email">user's email</div>
        </div>
      </Link>
    ),
    address: "/app",
  },
  {
    id: "profile",
    content: <span>Profile settings</span>,
    address: "/app/account",
  },
  {
    id: "balance",
    content: <span>Balance</span>,
    address: "/app",
  },
  {
    id: "logout",
    content: <span>Log out</span>,
    address: "/app",
  },
];

function UserMenu() {
  return (
    <div className="userMenu">
      <ul className="userMenu__list">
        {menuItems.map((item) => {
          return (
            <Link to={item.address} className="userMenu__item" key={item.id}>
              {item.content}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default UserMenu;
