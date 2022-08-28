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
        <Route exact path="/app" component={Home} />
        <Route path="/app/account" component={ProfileSettings} />
      </Switch>
    </div>
  );
}

export default Dashboard;
