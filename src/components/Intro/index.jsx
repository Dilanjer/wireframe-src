import React from "react";
import "./index.scss";
import macBookPro from "../../images/intro/macbook-pro.png";

function Intro({ section }) {
  return (
    <div className="intro" ref={section}>
      <div className="container">
        <div className="intro__inner">
          <div className="intro__content">
            <h1 className="intro__title">We Build Awesome Wireframe</h1>
            <h2 className="intro__subtitle">A Template by Your Company</h2>
          </div>
          <img className="intro__img" src={macBookPro} alt="Macbook Pro" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
