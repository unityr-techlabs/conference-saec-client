import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import StyledButton from "./button";
import AnimatedButton from "./button";

const ConferenceInfo = () => {
  return (
    <div className="mr-80 h-[455px]">
      <div className=" py-10 px-4 text-center text-white ">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          DIGITAL MARKETING <br />
          <span className="text-white drop-shadow-lg">CONFERENCE</span>
        </h1>

        <div
          className=" relative mt-8 mx-auto max-w-md bg-white/10 border-3 border-white rounded-full flex items-center px-6 py-4 gap-4 backdrop-blur-md z-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-yellow-400 rounded-full p-4">
            <FaLocationArrow size={24} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold">23-25 APR 2025</h3>
            <p className="text-sm">ZHYLIANSKA ST, 97Б, KYIV, LONDON.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap ">
          <AnimatedButton />
          <motion.button
            className="flex items-center gap-2 px-6 py-3  text-black font-bold bg-green-300 transition button rounded-full h-15 theme-btn "
            transition={{
              duration: 10,
            }}
            // whileHover={{
            //   backgroundColor: "black",
            //   color: "#ffffff",
            // }}
          >
            Get A Ticket <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;
