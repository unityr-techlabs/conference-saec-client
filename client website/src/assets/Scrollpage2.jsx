import React from "react";
import { FaNetworkWired, FaGlobe, FaChalkboardTeacher } from "react-icons/fa";

const events = [
  {
    title: "NETWORKING",
    icon: <FaNetworkWired size={60} />,
    description:
      "How you transform your business as tech, consumer, habits industry for the dynamic change, Find out from those leading the charge.",
    bg: "bg-purple-100",
    linkColor: "text-purple-600",
  },
  {
    title: "DAY MEETUP",
    icon: <FaGlobe size={60} />,
    description:
      "How you transform your business as tech, consumer, habits industry for the dynamic change, Find out from those leading the charge.",
    bg: "bg-yellow-100",
    linkColor: "text-blue-600",
  },
  {
    title: "MENTOR PROGRAM",
    icon: <FaChalkboardTeacher size={60} />,
    description:
      "How you transform your business as tech, consumer, habits industry for the dynamic change, Find out from those leading the charge.",
    bg: "bg-teal-100",
    linkColor: "text-blue-600",
  },
];

const Scrollpage = () => {
  return (
    <div className="bg-white  px-4 max-w-7xl mx-auto h-200">
      <div className="flex flex-wrap justify-center flex-row gap-6 ">
        {events.map((event, index) => (
          <div
            key={index}
            className={`rounded-2xl w-80 p-8 ${event.bg} shadow-md h-110 flex-col `}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4 text-black ">
              {event.icon}
            </div>
            <p className="text-3xl font-bold text-center mb-4  ">
              {event.title}
            </p>
            <p className="text-gray-600 text-sm mb-6 text-center   font-normal">
              {event.description}
            </p>
            <a
              href="#"
              className={`block text-sm font-semibold ${event.linkColor} text-center  mt-10`}
            >
              Get Event Ticket ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrollpage;
