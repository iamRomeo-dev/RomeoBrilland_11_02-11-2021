import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { data } from "./data";
import Home from "./Home";
import { SingleAccomodation } from "./SingleAccomodation";

class App extends Component {
  render() {
    return (
      <div className="mx-6 sm:mx-24">
        <Switch>
          <Route path="/accomodation/:userId" exact>
            <SingleAccomodation />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/page-not-found" />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
