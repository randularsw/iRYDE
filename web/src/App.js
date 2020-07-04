import React, { Component } from "react";
import "./App.css";
import { Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Sidebar from "components/shared/sidebar";
import sidebarRoutes from "sidebarRoutes";
import NavigationBar from "components/shared/navigationBar";
import serviceProviderList from "components/booking/serviceProviderList";
import serviceProviderDetails from "components/booking/serviceProviderDetails";
import ServiceProviderBooking from "components/booking/serviceProviderBooking";
import VehiclesList from "components/vehicles/vehiclesList";
import VehicleDetails from "components/vehicles/vehicleDetails";

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
          <Route exact path="/vehicles" component={VehiclesList}></Route>
          <Route exact path="/vehicle-details" component={VehicleDetails} ></Route>
          <Route exact path="/service-providers" component={serviceProviderList}></Route>
          <Route exact path="/service-provider/:id" component={serviceProviderDetails}></Route>
          <Route exact path="/booking/:id" component={ServiceProviderBooking}></Route>
          <Route path="/" component={Home}></Route>
          

        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
