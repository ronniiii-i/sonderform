import React, { useState, useEffect } from "react";

import Slide from "./components/Slide";

import data from "./data/data";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function displayfunc() {
    setClick(true);
    console.log("hi");
  }

  return (
    <div className="app">
      <section className={`loading ${isLoading ? "visible" : "hidden"}`}>
        <img
          src="https://uploads-ssl.webflow.com/63cfeb61947ce5d5a339a1de/640f7fd4b6260ae43c24d14e_sf-black.svg"
          alt="sonderform schriftzug in schwarz"
        />
      </section>
      <section id="content">
        <img
          src="https://uploads-ssl.webflow.com/63cfeb61947ce5d5a339a1de/64107694f02d59252aaeb96d_sf.svg"
          alt="sonderform schriftzug"
        />
        <div className="slider-container">
          <div className="flex row justify-center wrap inner">
            {/* {data.map((project) => (
              <Slide
                project={project}
                key={project.id}
                onOpen={click}
              />
            ))} */}
            
            <Slide
                project={data[0]}
                key={data[0].id}
                onOpen={click}
              />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
