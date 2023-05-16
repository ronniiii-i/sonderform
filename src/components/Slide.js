import React from "react";

function slide({ project }) {
  return (
    <div className="slide flex justify-center align-center">
      <img
        src={project.img_url.thumb.url}
        alt={project.img_url.thumb.alt}
        loading="lazy"
      />
      <div className="image"></div>
      <div className="bottom flex align-center">
        <div className="circle">
          <img
            src={project.img_url.logo.url}
            alt={project.img_url.logo.alt}
            loading="lazy"
          />
        </div>
        <div className="tags flex align-center justify-center">
          <p>{project.tags.join("/ ")}</p>
        </div>
      </div>
    </div>
  );
}

export default slide;
