import "./App.css";
import Home from "./home";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Scrollpage from "./assets/Scrollpage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="">
      <Home />
      <Scrollpage />
    </div>
  );
};

export default App;
