import React, { Fragment } from "react";
import "./App.styles";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import SignIn from "./pages/SignIn/SignIn.page";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import defaultTheme from "./themes/default";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header.component";

function App() {
  const isAuthorized = useSelector(
    (state: RootState) => state.user.isAuthorized
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Switch>
        {/* Routes without header */}
        <Route exact path={"/sign-in"}>
          {isAuthorized ? <Redirect to={"/"} /> : <SignIn />}
        </Route>

        {/* Routes with header*/}
        <Fragment>
          <Header />
          <Route exact path={"/"}>
            {isAuthorized ? <Home /> : <Redirect to={"/sign-in"} />}
          </Route>
        </Fragment>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
