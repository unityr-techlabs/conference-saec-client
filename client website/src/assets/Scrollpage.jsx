import React from "react";
import { motion } from "framer-motion";
import { shape4, spinimg } from "./constant/const";
import Scrollpagedown from "./Scrollpage2";

const Scrollpage = () => {
  return (
    <>
      <div className="bg-white h-109 w-full flex justify-start pl-30 pt-40 ">
        <motion.img
          src={spinimg}
          alt="Spinning"
          className="w-40 h-40" // adjust size as needed
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />
        <div className="flex-col ">
          <div className="w-[800px] pl-10 font-extrabold flex-row ">
            <p className="text-[40px] font-bold pl-15 text-gray-800">
              {" "}
              WHY WE ATTENDED DIGITAL
            </p>
            <p className="text-[50px] font-bold text-gray-800">
              MARKETING EVENTS OF 2025
            </p>
          </div>
          <div className="font-medium text-gray-600 ml-10 text-[17px] h-5">
            <p className="pt-2">
              Welcome to the 2024 global innovation summit, where the brightest
              minds and visionary
            </p>
            <p className="ml-25 ">
              leaders gather to explore the future of technology & innovation.
            </p>
          </div>
        </div>{" "}
        <img src={shape4} className="w-80 h-95 pb-50"></img>{" "}
      </div>
      <div className="">
        <Scrollpagedown />
      </div>
    </>
  );
};

export default Scrollpage;
