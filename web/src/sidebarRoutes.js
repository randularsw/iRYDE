import Home from "components/home";
import ServicesView from "components/servicelist/servicesView";
import PromotionsView from "components/promotionlist/promotionsView";

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
    component: ServicesView,
    actor: "service-provider",
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: "ni ni-planet text-blue",
    component: PromotionsView,
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
];
export default sidebarRoutes;
