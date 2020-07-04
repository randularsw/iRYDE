import Home from "components/home";
import About from "components/auth/about";
import serviceProviders from "components/booking/serviceProviderList";
import VehiclesList from "components/vehicles/vehiclesList";

var sidebarRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "vo",
  },
  {
    path: "/about",
    name: "About",
    icon: "ni ni-tv-2 text-primary",
    component: About,
    actor: "sp",
  },
  {
    path: "/services",
    name: "Services",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "sp",
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "sp",
  },
  {
    path: "/types",
    name: "Vehicle Types",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "ad",
  },
  {
    path: "/tags",
    name: "Tags",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "ad",
  },
  //routes for service providers
  {
    path: "/service-providers",
    name: "Service Providers",
    icon: "ni ni-planet text-blue",
    component: serviceProviders ,
    actor: "vo",
  },
//routes for vehicle
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "ni ni-planet text-blue",
    component: VehiclesList ,
    actor: "vo",
  },

];
export default sidebarRoutes;
