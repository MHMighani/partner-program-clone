import Navbar from "../../layout/dashboard/navbar";
import Home from "./home/home";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-main-wrapper">
      <Navbar />
      <Home />
    </div>
  );
}

export default Dashboard;
