import React, { Component } from "react";
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
import About from "components/auth/about";
import Profile from "components/auth/profile";
import serviceProviderList from "components/booking/serviceProviderList";
import serviceProviderDetails from "components/booking/serviceProviderDetails";
import ServiceProviderBooking from "components/booking/serviceProviderBooking";
import VehiclesList from "components/vehicles/vehiclesList";
import VehicleDetails from "components/vehicles/vehicleDetails";
import ServicesView from "components/servicelist/servicesView";
import ServicesAdd from "components/servicelist/servicesAdd";
import PromotionsView from "components/promotionlist/promotionsView";
import PromotionsAdd from "components/promotionlist/promotionsAdd";
import PromotionsEdit from "components/promotionlist/promotionsEdit";
import StudentTableRow from "components/servicelist/serviceTableRow";
import VehicleType from "components/admin/vehicleType";
import SpBookingView from "components/booking/spBookingView";
import VoBookingView from "components/booking/voBookingView";
import SpViewCalendar from "components/calendar/spViewCalendar";

function App(props) {
  return (
    <UserProvider>
      <Sidebar
        // {...props}
        routes={sidebarRoutes}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/images/logo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content bg-default pb-5" style={{ minHeight: 800 }}>
        <NavigationBar
          {...props}
          // brandText={this.getBrandText(this.props.location.pathname)}
        />
        <Switch>
          {/* Routes */}
          <Route path="/services" component={ServicesView}></Route>
          <Route path="/servicesadd" component={ServicesAdd}></Route>
          <Route path="/promotions" component={PromotionsView}></Route>
          <Route path="/promotionsadd" component={PromotionsAdd}></Route>
          <Route path="/edit/:id" component={PromotionsEdit}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/auth/login" component={Login}></Route>
          <Route exact path="/auth/register" component={Register}></Route>
          <Route exact path="/auth/logout" component={Logout}></Route>
          <Route exact path="/vehicles" component={VehiclesList}></Route>
          <Route exact path="/vehicle/:id" component={VehicleDetails}></Route>
          <Route exact path="/service-providers" component={serviceProviderList}></Route>
          <Route exact path="/service-provider/:id" component={serviceProviderDetails}></Route>
          <Route exact path="/booking/:id" component={ServiceProviderBooking}></Route>
          <Route exact path="/sp/appointments" component={SpBookingView}></Route>
          <Route exact path="/vo/appointments" component={VoBookingView}></Route>
          <Route exact path="/services" component={ServicesView}></Route>
          <Route exact path="/servicesadd" component={ServicesAdd}></Route>
          <Route path="/admin/" component={VehicleType}></Route>
          <Route exact path="/sp/calendar" component={SpViewCalendar}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
