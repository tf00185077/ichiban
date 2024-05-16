import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages";
import App from "@/App";
import Ichiban from "@/pages/iChiban/index";
import Login from "@/pages/login/index";
import Singup from "@/pages/signup";
import BlindBox from "@/pages/blindBox";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ichiban",
        element: <Ichiban />,
      },
      {
        path: "/blindBox",
        element: <BlindBox />,
      },
      {
        path: "/login",
        element: <Login />,
      },{
        path: "/signup",
        element: <Singup />
      }
    ],
  }
]);
export default router;
