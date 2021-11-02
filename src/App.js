import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./Home";
import { Accomodation } from "./Accomodation";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
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
  );
}

export default App;
