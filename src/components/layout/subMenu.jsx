function SubMenu({ subItems, label }) {
  return (
    <>
      <button>{label}</button>
      <div className="menu__sub">
        <ul className="menu__items">
          {subItems.map((item) => (
            <a key={item.id} href={item.link}>
              {item.label}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SubMenu;
