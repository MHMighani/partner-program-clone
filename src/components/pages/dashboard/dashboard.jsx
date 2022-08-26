import Sidebar from "../../layout/dashboard/sidebar";
import Home from "./home/home";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-main-wrapper">
      <Sidebar />
      <Home />
    </div>
  );
}

export default Dashboard;
