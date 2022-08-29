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
  const { form } = useParams();

  const forms = {
    emails: <EmailForm />,
    billing: <BillingForm />,
    security: <SecurityForm />,
    token: <TokensForm />,
  };

  return (
    <div className="section profile-settings">
      <FormNav />
      <SettingWrapper title="Profile settings">
        {forms[form] || <ProfileForm />}
      </SettingWrapper>
    </div>
  );
}

export default ProfileSettings;
