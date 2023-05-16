import React from "react";

function slide({ project }) {
  return (
    <div className="slide flex justify-center align-center">
      {/* <div className="inner">
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
            {project.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
      </div> */}
        <img src={project.img_url.thumb.url} alt={project.img_url.thumb.alt} />
      <div className="image">
      </div>
      <div className="bottom flex align-center">
        <div className="circle">
          <img src={project.img_url.logo.url} alt={project.img_url.logo.alt} />
        </div>
        <div className="tags">
        <p>{project.tags.join("/ ")}</p>
        </div>
      </div>
    </div>
  );
}

export default slide;
