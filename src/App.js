import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./Home";
import { SingleAccomodation } from "./SingleAccomodation";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <div className="mx-6 sm:mx-24">
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </div>
    );
  }
}
export default App;
