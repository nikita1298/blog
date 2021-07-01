import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProtectedComponent from "./Components/ProtectedComponent";
import { routes} from './Routes';
export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((prop) =>
          prop.isProtected ? (
            <ProtectedComponent {...prop} />
          ) : (
            <Route {...prop} />
          )
        )}
      </Switch>
    </Router>
  );
}