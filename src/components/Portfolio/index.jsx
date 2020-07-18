import React from "react";
import "./index.scss";
import { BlockTitle, Button, ProjectCard } from "../index";

function Portfolio({ section }) {
  return (
    <div className="portfolio" ref={section}>
      <div className="container">
        <div className="portfolio__inner pd-in-60">
          <BlockTitle
            title="Portfolio"
            subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          />
          <div className="portfolio__categories">
            <Button className="button button-primary-outline active">Hello</Button>
            <Button className="button button-primary-outline">Desing</Button>
            <Button className="button button-primary-outline">Identity</Button>
            <Button className="button button-primary-outline">Photography</Button>
            <Button className="button button-primary-outline">Ilustration</Button>
          </div>
          <div className="portfolio__projects">
            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />

            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />
            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />
            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />
            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />
            <ProjectCard
              projectImg="http://via.placeholder.com/300x200.png"
              projectTitle="Title"
              projectSubTitle="Lorem
              psum dolor sit amet, consectetuer adipiscing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
