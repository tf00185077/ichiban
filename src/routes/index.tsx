import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages";
import App from "@/App";
import Ichiban from "@/pages/iChiBan/index";
import Login from "@/pages/login/index";
import Singup from "@/pages/signup";
import BlindBox from "@/pages/blindBox";
import MemberCenter from "@/pages/member-center"
import MemberDetail from "@/components/memberCenter/main/MemberDetail";
import ConsumptionRecord from "@/components/memberCenter/main/ConsumptionRecord";
import ChangePassword from "@/components/memberCenter/main/ChangePassword";
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
      },{
        path:"/member-center",
        element:<MemberCenter/>,
        children:[
          {
            path:"/member-center",
            element:<MemberDetail/>
          },
          {
            path:"/member-center/ComsumptionRecord",
            element:<ConsumptionRecord/>
          },{
            path:"/member-center/ChangePassword",
            element:<ChangePassword/>
          }
        ]
      }
    ],
  }
]);
export default router;
