import { Route, Switch } from "react-router-dom";

import Navbar from "../../layout/dashboard/navbar";
import Home from "./home/home";
import ProfileSettings from "./profileSettings/profileSettings";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-main-wrapper">
      <Navbar />
      <Switch>
        <Route path="/app/account/:form?" component={ProfileSettings} />
        <Route path="/app/:page?" component={Home} />
      </Switch>
    </div>
  );
}

export default Dashboard;
