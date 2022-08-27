import Navbar from "../../layout/dashboard/navbar";
import Home from "./home/home";
import ProfileSettings from "./profileSettings/profileSettings";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-main-wrapper">
      <Navbar />
      <ProfileSettings />
      {/* <Home /> */}
    </div>
  );
}

export default Dashboard;
