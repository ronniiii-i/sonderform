import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Pagination } from "swiper";

import Slide from "./components/Slide";

import data from "./data/data";

import "swiper/css";
import "swiper/css/pagination";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pagination = {
    clickable: false,
    renderBullet: function () {
      return `<span class="paginate"></span>`;
    },
  };

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
          <Swiper
            slidesPerView={3}
            spaceBetween={100}
            mousewheel={true}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            pagination={pagination}
            onSlideChange={() => console.log("slide change")}
            modules={[Keyboard, Mousewheel, Pagination]}
            className="mySwiper"
          >
            {data.map((project) => (
              <SwiperSlide>
                <Slide project={project} key={project.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`menu ${menu ? "" : "hide"}`}>
          <ul>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              Say <a href="mailto:hey@sonderform.com">hey@ sonderform.com</a>
            </li>
          </ul>
          <div className="end flex justify-between align-center">
            <div className="left flex align-center">
              <a href="#">imprint</a>
              <a href="#">data protection</a>
            </div>
            <div className="svg" onClick={toggleMenu}>
              <svg
                width="auto"
                height="auto"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="20" width="2" height="41"></rect>
                <rect
                  x="41"
                  y="20"
                  width="2"
                  height="41"
                  transform="rotate(90 41 20)"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
