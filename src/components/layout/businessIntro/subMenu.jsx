import { ReactComponent as Chevron } from "../../../assets/businessIntro/chevron.svg";

function SubMenu({ subItems, label }) {
  return (
    <>
      <button className="nav-item__label">
        {label}
        <Chevron className="chevron" />
      </button>
      <div className="nav-sub">
        <ul className="nav-sub__items">
          {subItems.map((item) => (
            <li className="nav-sub__item" key={item.id}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SubMenu;
