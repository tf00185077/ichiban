import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ichiban from "@/pages/ichiban/index";
import Login from "@/pages/login/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ichiban />,
  },
  {
    path: "/ichiban",
    element: <Ichiban />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
