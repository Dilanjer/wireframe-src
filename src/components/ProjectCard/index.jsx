import React from 'react'

import "./index.scss";

import linkImg from "../../images/projectcard/link.png"

function ProjectCard({ projectImg, projectTitle, projectSubTitle }) {
  return (
    <div className="projectcard">
      <div className="projectcard__inner">
        <div className="projectcard__img">
          <img src={projectImg} alt="project" />
        </div>
        <div className="projectcard__text">
          <div className="projectcard__title">{projectTitle}</div>
          <div className="projectcard__subtitle">{projectSubTitle}</div>
        </div>
        <div className="projectcard__link">
          <a href="/#">
            <img src={linkImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
