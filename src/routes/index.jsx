import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ichiban from "@/pages/ichiban";
import Login from "@/pages/login";
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
