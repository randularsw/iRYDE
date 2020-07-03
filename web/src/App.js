import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Sidebar from "components/shared/sidebar";
import sidebarRoutes from "sidebarRoutes";
import NavigationBar from "components/shared/navigationBar";
import Login from "components/auth/login";
import Register from "components/auth/register";
import UserProvider from "core/userContext";
import Logout from "components/auth/logout";

function App(props) {
  return (
    <UserProvider>
      <Sidebar
        // {...props}
        routes={sidebarRoutes}
        logo={{
          innerLink: "/",
          // imgSrc: require("assets/images/logo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content bg-default">
        <NavigationBar
          {...props}
          // brandText={this.getBrandText(this.props.location.pathname)}
        />
        <Switch>
          {/* Routes */}
          <Route path="/auth/login" component={Login}></Route>
          <Route path="/auth/register" component={Register}></Route>
          <Route path="/auth/logout" component={Logout}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
      </UserProvider>
  );
}

export default App;
