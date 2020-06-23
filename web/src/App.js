import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
