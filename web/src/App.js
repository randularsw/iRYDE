import React, { Component } from "react";
import "./App.css";
import { Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Sidebar from "components/shared/sidebar";
import sidebarRoutes from "sidebarRoutes";
import NavigationBar from "components/shared/navigationBar";
import serviceProviderList from "components/booking/serviceProviderList";

function App(props) {
  return (
    <React.Fragment>
      <Sidebar
        // {...props}
        routes={sidebarRoutes}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/images/logo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <NavigationBar
          {...props}
          // brandText={this.getBrandText(this.props.location.pathname)}
        />
        <Switch>
          {/* Routes */}
          
          <Route path="/service-providers" component={serviceProviderList}></Route>
          <Route path="/" component={Home}></Route>
          <Route path="/"></Route>

        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
