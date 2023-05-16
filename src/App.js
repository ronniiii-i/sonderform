import React, { useState, useEffect } from "react";

import Slide from "./components/Slide";

import data from "./data/data";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <section className={`loading ${isLoading ? "visible" : "hidden"}`}>
        <img
          src="https://uploads-ssl.webflow.com/63cfeb61947ce5d5a339a1de/640f7fd4b6260ae43c24d14e_sf-black.svg"
          alt="sonderform schriftzug in schwarz"
        />
      </section>
      <section id="content" className="flex align-center justify-center">
        <img
          src="https://uploads-ssl.webflow.com/63cfeb61947ce5d5a339a1de/64107694f02d59252aaeb96d_sf.svg"
          alt="sonderform schriftzug"
          className="head"
        />
        <div className="slider-container">
          <div className="flex row justify-start inner">
            {data.map((project) => (
              <Slide project={project} key={project.id} />
            ))}

            {/* <Slide
                project={data[0]}
                key={data[0].id}
              /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
