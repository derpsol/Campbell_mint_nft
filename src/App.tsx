import { Route, Switch, HashRouter } from "react-router-dom";

import { Home, PendingMotion, ViewBase } from "./views";
import { Web3ContextProvider } from "./hooks";

function App() {
  return (
    <Web3ContextProvider>
      <HashRouter>
        <ViewBase>
          <Switch>
            <Route path="/pending">
              <PendingMotion />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ViewBase>
      </HashRouter>
    </Web3ContextProvider>
  );
}

export default App;
