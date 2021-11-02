import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./Home";
import { Accomodation } from "./Accomodation";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="mx-6 sm:mx-24">
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/accomodation/:userId" exact>
            <Accomodation />
          </Route>
          <Route path="/home" exact>
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

export default App;
