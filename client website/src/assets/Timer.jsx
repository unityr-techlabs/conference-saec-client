import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import ConferenceInfo from "./conferenceticket";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-23T00:00:00"); // Event start date
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {" "}
      <div className="ml-90 pt-15 ">
        <div className="coming-soon-timer d-flex justify-content-center gap-6 mr-80 ">
          <div
            className="circle-timer border-green "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>{timeLeft.days}</h3>
            <p>Days</p>
          </div>
          <div
            className="circle-timer border-orange "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>{timeLeft.hours}</h3>
            <p>hrs</p>
          </div>
          <div
            className="circle-timer border-blue "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3>{timeLeft.minutes}</h3>
            <p>mins</p>
          </div>
          <div
            className="circle-timer border-green "
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3>{timeLeft.seconds}</h3>
            <p>secs</p>
          </div>
        </div>
        <ConferenceInfo />
      </div>
    </>
  );
};

export default CountdownTimer;
