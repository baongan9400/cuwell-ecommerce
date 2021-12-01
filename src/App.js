import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import Toast from "components/Toast";
import { routeConfig, RouteWithSubRoutes } from "router/config";
import history from "./history";

import Login from "./pages/Authentication/Login/Login";

function App() {
  return (
    <div className="content-wrapper">
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          {routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
