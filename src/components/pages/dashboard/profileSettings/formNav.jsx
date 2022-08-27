import { useState } from "react";
import * as images from "../../../../assets/dashboard/profile-settings";

function FormNav() {
  const [selected, setSelected] = useState("profile");

  const data = [
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
      id: "tokens",
      label: "API tokens",
      image: images.token,
    },
  ];

  const title = "Profile settings";

  return (
    <div className="form-nav">
      <div className="form-nav__title">{title}</div>
      <div form-nav__items>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id === selected ? "active" : ""
              } form-nav__item`}
            >
              <img className="item-icon" src={item.image} alt={item.label} />

              <span className="item-label">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FormNav;
