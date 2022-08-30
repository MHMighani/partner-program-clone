import { useParams, Link } from "react-router-dom";
import { ReactComponent as ProfileSvg } from "../../../../assets/dashboard/profile-settings/profile.svg";
import { ReactComponent as EmailSvg } from "../../../../assets/dashboard/profile-settings/email.svg";
import { ReactComponent as SecuritySvg } from "../../../../assets/dashboard/profile-settings/security.svg";
import { ReactComponent as TokenSvg } from "../../../../assets/dashboard/profile-settings/token.svg";
import { ReactComponent as BillingSvg } from "../../../../assets/dashboard/profile-settings/billing.svg";

const navItemData = [
  {
    id: "profile",
    label: "profile details",
    image: ProfileSvg,
  },
  {
    id: "billing",
    label: "Billing",
    image: BillingSvg,
  },
  {
    id: "emails",
    label: "Email preferences",
    image: EmailSvg,
  },
  {
    id: "security",
    label: "security",
    image: SecuritySvg,
  },
  {
    id: "token",
    label: "API tokens",
    image: TokenSvg,
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
              to={`/app/account/${item.id}`}
              key={item.id}
              className={`${item.id === form ? "active" : ""} form-nav__item`}
            >
              {/* <img className="item-icon" src={item.image} alt={item.label} /> */}

              <item.image
                className="item-icon"
                stroke={item.id === form ? "blue" : "grey"}
              />
              <span className="item-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FormNav;
