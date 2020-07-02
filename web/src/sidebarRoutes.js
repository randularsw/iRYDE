import Home from "components/home";
import serviceProviders from "components/booking/serviceProviderList";
import Vehicles from "components/vehicles/vehicles";

var sidebarRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "vehicle-owner",
  },
  {
    path: "/services",
    name: "Services",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "service-provider",
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "service-provider",
  },
  {
    path: "/types",
    name: "Vehicle Types",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "admin",
  },
  {
    path: "/tags",
    name: "Tags",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "admin",
  },
  //routes for service providers
  {
    path: "/service-providers",
    name: "Service Providers",
    icon: "ni ni-planet text-blue",
    component: serviceProviders ,
    actor: "vehicle-owner",
  },
//routes for vehicle
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "ni ni-planet text-blue",
    component: Vehicles ,
    actor: "vehicle-owner",
  },

];
export default sidebarRoutes;
