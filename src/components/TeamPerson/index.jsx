import React from 'react'
import "./index.scss"
import { Button } from "../index"
import mailImg from "../../images/team/mail2.svg"

function TeamPerson({ personImg, personName, peronsInfo, personAddress }) {

  return (
    <div className="teamperson">
      <div className="teamperson__inner">
        <div className="teamperson__img" >
          <img src={personImg} alt="personImg" />
        </div >
        <div className="teamperson__name">{personName}</div>
        <div className="teamperson__info">{peronsInfo}</div>
        <div className="teamperson__buttton">
          <Button address={personAddress} className="button button-primary">
            <img src={mailImg} alt="mail" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TeamPerson;
