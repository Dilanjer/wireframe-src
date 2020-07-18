import React from 'react'

import "./index.scss"
import menuImg from "../../images/menu/burger-menu.svg"

function BurgerMenu({ children, onClick }) {
  return (
    <div className="burgermenu">
      <div className="burgermenu__inner">
        <div onClick={onClick} className="burgermenu__menu">
          <img src={menuImg} alt="Menu" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default BurgerMenu
