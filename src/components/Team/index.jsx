import React from "react";
import "./index.scss";
import { TeamPerson, BlockTitle } from "../index";

import maleImg from "../../images/team/male.png";
import feamleImg from "../../images/team/feamle.png";

function Team({ section }) {
  return (
    <div className="team" ref={section}>
      <div className="container">
        <div className="team__inner pd-in-60">
          <BlockTitle
            title="Our Team"
            subTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          />

          <div className="team__content">
            <TeamPerson
              personImg={maleImg}
              personName="Name1"
              peronsInfo="Lorem ipsum dolor sit amet, 
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              personAddress="/#"
            />
            <TeamPerson
              personImg={feamleImg}
              personName="Name2"
              peronsInfo="Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              personAddress="/#"
            />
            <TeamPerson
              personImg={maleImg}
              personName="Name3"
              peronsInfo="Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              personAddress="/#"
            />
            <TeamPerson
              personImg={feamleImg}
              personName="Name4"
              peronsInfo="Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
              personAddress="/#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
