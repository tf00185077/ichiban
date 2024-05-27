import React from "react";
import HeaderSelector from "./HeaderSelector";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAndSignup from "./LoginAndSignup";
import AfterLogin from "./AfterLogin";
const Header = () => {
  return (
    <>
      <div className="mr-auto ml-auto max-w-[1400px] flex px-[10px] py-[5px] justify-between">
        <div className="flex pt-[10px]">
          <img className="w-[110px] mr-[10px] h-[84px]" src="" alt="" />
          <HeaderSelector name="一番賞" iconName="pick"></HeaderSelector>
          <HeaderSelector name="盲盒" iconName="surprise-box"></HeaderSelector>
          <HeaderSelector name="賞品盒" iconName="treasure"></HeaderSelector>
          <HeaderSelector name="即時榜單" iconName="joystick"></HeaderSelector>
          <HeaderSelector name="每日簽到" iconName="gift"></HeaderSelector>
          <HeaderSelector name="最新消息" iconName="clock"></HeaderSelector>
        </div>
        <LoginAndSignup></LoginAndSignup>
        <AfterLogin></AfterLogin>
      </div>
    </>
  );
};
export default Header;
