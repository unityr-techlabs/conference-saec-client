import React from "react";
import { logoimg } from "./assets/constant/const";
import Navbar from "./assets/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CountdownTimer from "./assets/Timer";
import Scrollpage from "./assets/Scrollpage"
const Home = () => {
  return (
    <>
      <div className="flex justify-between border-b-[0.5px] border-b-gray-500 h-full align-middle w-full  ">
        <img src={logoimg} className="mt-2 w-55 h-20 pl-7 "></img>{" "}
        <ul className="flex font-medium text-white text-[15px] mr-20 mt-3 cursor-pointer">
          <li className="m-[18px] p-[8px] hover:text-violet-500">
            HOME
            <div className=""></div>
          </li>
          <li className="m-[18px] p-[8px] hover:text-violet-500">PAGE </li>
          <li className="m-[18px] p-[8px] hover:text-violet-500">SPEAKERS </li>
          <li className="m-[18px] p-[8px] hover:text-violet-500">SCHEDULE </li>
          <li className="m-[18px] p-[8px] hover:text-violet-500">BLOG </li>
          <li className="m-[18px] p-[8px] hover:text-violet-500"></li>
          <Navbar />
        </ul>
      </div>

      <CountdownTimer />

      {/* <div className="w-100% h-0.5 bg-amber-50 "></div> */}
    </>
  );
};

export default Home;
