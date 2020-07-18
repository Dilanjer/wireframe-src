import React from "react";
import { BlockTitle } from "../index";
import ipadAir from "../../images/about/ipad-air.png";
import "./index.scss";

function About({ section }) {
  return (
    <div className="about" ref={section}>
      <div className="container">
        <div className="about__inner pd-in-60">
          <BlockTitle
            title="About Us"
            subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          />
          <img className="about__img" src={ipadAir} alt="ipad" />
          <div className="about__subtext">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
