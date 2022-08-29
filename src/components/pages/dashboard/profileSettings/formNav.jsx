import { useParams, Link } from "react-router-dom";
import * as images from "../../../../assets/dashboard/profile-settings";

const navItemData = [
  {
    id: "profile",
    label: "profile details",
    image: images.profile,
  },
  {
    id: "billing",
    label: "Billing",
    image: images.billing,
  },
  {
    id: "email",
    label: "Email preferences",
    image: images.email,
  },
  {
    id: "security",
    label: "security",
    image: images.security,
  },
  {
    id: "token",
    label: "API tokens",
    image: images.token,
  },
];

function FormNav() {
  const title = "Profile settings";
  let { form } = useParams();
  // if no param provided then profile section will be selected
  form = form || "profile";
  return (
    <div className="form-nav">
      <div className="form-nav__title">{title}</div>
      <div form-nav__items>
        {navItemData.map((item) => {
          return (
            <Link
              to={item.id}
              key={item.id}
              className={`${item.id === form ? "active" : ""} form-nav__item`}
            >
              <img className="item-icon" src={item.image} alt={item.label} />

              <span className="item-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FormNav;
