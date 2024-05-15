import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages";
import App from "@/App";
import Ichiban from "@/pages/ichiban/index";
import Login from "@/pages/login/index";
import Singup from "@/pages/signup";
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
