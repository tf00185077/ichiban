import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ichiban from "@/pages/ichiban/index.tsx";
import Login from "@/pages/login/index.tsx";
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
