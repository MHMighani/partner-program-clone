import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import Dashboard from "./components/pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/app" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
