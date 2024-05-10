import React from "react";
import HeaderSelector from "./HeaderSelector";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex">
      <Router>
        <HeaderSelector name="一番賞" iconName="pick"></HeaderSelector>
        <HeaderSelector name="盲盒" iconName="surprise-box"></HeaderSelector>
        <HeaderSelector name="賞品盒" iconName="treasure"></HeaderSelector>
        <HeaderSelector name="即時榜單" iconName="joystick"></HeaderSelector>
        <HeaderSelector name="每日簽到" iconName="gift"></HeaderSelector>
        <HeaderSelector name="最新消息" iconName="clock"></HeaderSelector>
      </Router>
    </div>
  );
};
export default Header;
