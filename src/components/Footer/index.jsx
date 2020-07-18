import React from 'react'
import "./index.scss"

import { Button } from "../index"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner pd-in-60">
        <div className="footer__link">
          <Button className="nav__link nav__link-secondry" address="/#">Home</Button>
          <span>:</span>
          <Button className="nav__link nav__link-secondry" address="/#">About</Button>
          <span>:</span>
          <Button className="nav__link nav__link-secondry" address="/#">Team</Button>
          <span>:</span>
          <Button className="nav__link nav__link-secondry" address="/#">Potfoilo</Button>
          <span>:</span>
          <Button className="nav__link nav__link-secondry" address="/#">Contact</Button>
        </div>
        <div className="footer__copyrigth">Copyright © Your Company 2014. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
