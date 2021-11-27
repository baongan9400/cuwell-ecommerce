import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import Toast from "components/Toast";
import { routeConfig, RouteWithSubRoutes } from "router/config";

import Login from "./pages/Authentication/Login/Login";

function App() {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
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
