import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import SingleAccomodation from "./SingleAccomodation";
import Footer from "./Footer";
import Page404 from "./Page404";
import Header from "./Header";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <>
        <div className="mx-6 sm:mx-24">
          <Header />
          <Switch>
            <Route
              exact
              path="/accomodation/:id"
              component={SingleAccomodation}
            />
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
