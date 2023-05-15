import React from "react";

function slide({ project, onOpen }) {
  return (
    <div className={`slide ${onOpen ? "show" : "not"}`}>
      <div className="inner">
        <div className="hero flex align-bottom">
          <img
            src={project.img_url.thumb.url}
            alt={project.img_url.thumb.alt}
            className="bg"
          />
          <h1>{project.title}</h1>
        </div>
        <div className="content flex justify-center">
          <div className="tagNname">
            {
            git 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default slide;
