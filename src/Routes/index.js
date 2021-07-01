import HomePage from "../Components/HomePage";
import UserDashBoard from "../Components/UserDashBoard";
import ListItem from "../Components/ListItem";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    isProtected: false,
  },
  {
    path: "/blog/:name",
    exact: true,
    component: UserDashBoard,
    isProtected: true,
  },
];
