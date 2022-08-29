import { Link } from "react-router-dom";

import "./userMenu.scss";

const menuItems = [
  {
    id: "user",
    content: (
      <>
        <div className="avatar"></div>
        <div className="text"></div>
      </>
    ),
    address: "/",
  },
  {
    id: "profile",
    content: <span>Profile settings</span>,
    address: "/app/account",
  },
  {
    id: "balance",
    content: <span>Balance</span>,
    address: "/",
  },
  {
    id: "logout",
    content: <span>Log out</span>,
    address: "/",
  },
];

function UserMenu({ show }) {
  return (
    show && (
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
    )
  );
}

export default UserMenu;
