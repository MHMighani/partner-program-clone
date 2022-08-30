import { useParams } from "react-router-dom";
import FormNav from "./formNav";
import ProfileForm from "./profileForm";
import EmailForm from "./emailForm";
import BillingForm from "./billingForm";
import SecurityForm from "./securityForm";
import TokensForm from "./tokensForm";

import "./profileSettings.scss";

function SettingWrapper({ title, children }) {
  return (
    <div className="settings-wrapper">
      <h5 className="title">{title}</h5>
      <div className="content">{children}</div>
    </div>
  );
}

function ProfileSettings() {
  let { form } = useParams();

  const forms = {
    emails: <EmailForm />,
    billing: <BillingForm />,
    security: <SecurityForm />,
    token: <TokensForm />,
  };

  const titles = {
    emails: "Email preferences",
    billing: "Biling",
    profile: "Profile details",
    security: "Security",
    token: "API tokens",
  };

  // if params is not in forms keys then profile will be selected
  const component = forms[form] || <ProfileForm />;
  const title = forms[form] ? titles[form] : titles["profile"];

  return (
    <div className="section profile-settings">
      <FormNav />
      <SettingWrapper title={title}>{component}</SettingWrapper>
    </div>
  );
}

export default ProfileSettings;
