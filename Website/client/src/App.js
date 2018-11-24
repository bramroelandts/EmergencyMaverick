import React from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import UseCases from "./UseCases";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/demo" component={Dashboard} />
          <Route exact path="/use-cases" component={UseCases} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
