import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/home/Home";
import Shop from "../page/shop/Shop";
import About from "../page/about/About";
import Features from "../page/features/Features";
import Login from "../forms/Login";
import Register from "../forms/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "features",
        Component: Features,
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
]);
