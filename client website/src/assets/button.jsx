import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const AnimatedButton = () => {
  return (
    <motion.button
      className="relative overflow-hidden  border border-orange-500 text-green-500 font-bold px-6 py-3 flex items-center gap-2 z-10 group button "
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{ backgroundColor: "black" }}
      transition={{ scale: 1 }}
      exit={{ opacity: 9, scale: 7 }}
    >
      {/* Hover Background Effect */}
      <span className="absolute inset-0 bg-green-300 transition-all duration-900 scale-x-0 group-hover:scale-x-100 origin-middle  z-0 "></span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 text-orange-300 group-hover:text-gray-950">
        Become A Sponsor <FaArrowRight />
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
