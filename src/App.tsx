import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.page";
import SignIn from "./pages/SignIn.page";

function App() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>

      <Route exact path={"/sign-in"}>
        <SignIn />
      </Route>
    </Switch>
  );
}

export default App;
