import FormNav from "./formNav";
import ProfileForm from "./profileForm";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();

  return (
    <div className="section profile-settings">
      <FormNav />
      <SettingWrapper title="Profile settings">
        <ProfileForm />
      </SettingWrapper>
    </div>
  );
}

export default ProfileSettings;
