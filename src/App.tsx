import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import MainCard from "./components/layout/MainCard";
const App = () => {
  return (
    <>
        <Header></Header>
        <MainCard>
            <Outlet></Outlet>
        </MainCard>
    </>
  );
};
export default App;
