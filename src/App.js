import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleAccomodation from "./SingleAccomodation";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <>
        <div className="mx-6 sm:mx-24">
          <Switch>
            <Route
              exact
              path="/accomodation/:id"
              component={SingleAccomodation}
            />
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="*">
            <Redirect to="/page-not-found" />
          </Route> */}
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
