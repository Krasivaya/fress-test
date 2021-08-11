import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cook" exact component={NotFound} />
        <Route path="/foodie" exact component={NotFound} />
        <Route path="/login" exact component={NotFound} />
        <Route path="/" component={Navbar} />
      </Switch>
    </Router>
  );
};

export default App;
