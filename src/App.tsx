import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
const App = () => {
  return (
    <>
        <React.StrictMode>
            <Header></Header>
            <Outlet></Outlet>
        </React.StrictMode>
    </>
  );
};
export default App;
