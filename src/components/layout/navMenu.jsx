import SubMenu from "./subMenu";
function NavMenu({ navMenuItems }) {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {navMenuItems.map((item) => (
          <li className="nav__item" key={item.id}>
            {item.type === "link" ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <SubMenu subItems={item.subItems} label={item.label} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
