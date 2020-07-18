import React from "react";

import { BlockTitle, Button } from "../index";
import "./index.scss";

function Contact({ section }) {
  return (
    <div className="contact" ref={section}>
      <div className="container">
        <div className="contact__inner pd-in-60">
          <BlockTitle
            title="Contact"
            subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          />
          <div className="contact__forms">
            <form action="/#">
              <div className="contact__input">
                <input id="none" name="name" placeholder="Enter your Name" type="text" />
              </div>
              <div className="contact__input">
                <input id="none" name="address" placeholder="Enter your Address" type="text" />
              </div>
              <div className="contact__input">
                <input id="none" name="City" placeholder="Enter your City" type="text" />
              </div>
              <div className="contact__input">
                <input id="none" name="mail" placeholder="Enter your Email Address" type="text" />
              </div>
              <div className="contact__input">
                <textarea id="none" name="mail" placeholder="Enter your Email Message" type="text" />
              </div>
            </form>
          </div>
          <Button address={`/#`} className="button button-primary">
            Submint
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
