import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/homee" exact>
          <div className="mx-6 sm:mx-24">
            <h1>toto</h1>
          </div>
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
