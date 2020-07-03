import Home from "components/home";
import VehicleType from "components/admin/vehicleType";

var sidebarRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "vehicle-owner",
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    icon: "ni ni-planet text-blue",
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
    path: "/admin/vehicleType",
    name: "Vehicle Types",
    icon: "ni ni-tv-2 text-primary",
    component: VehicleType,
    actor: "admin",
  },
  {
    path: "/tags",
    name: "Tags",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "admin",
  },
];
export default sidebarRoutes;
