import Home from "components/home";
import About from "components/auth/about";

var sidebarRoutes = [
  {
    path: "/vo/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "vo",
  },
  {
    path: "/vo/vehicles",
    name: "Vehicles",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "vo",
  },
  {
    path: "/sp/about",
    name: "About",
    icon: "ni ni-tv-2 text-primary",
    component: About,
    actor: "sp",
  },
  {
    path: "/sp/services",
    name: "Services",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "sp",
  },
  {
    path: "/sp/promotions",
    name: "Promotions",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "sp",
  },
  {
    path: "/ad/types",
    name: "Vehicle Types",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    actor: "ad",
  },
  {
    path: "/ad/tags",
    name: "Tags",
    icon: "ni ni-planet text-blue",
    component: Home,
    actor: "ad",
  },
];
export default sidebarRoutes;
