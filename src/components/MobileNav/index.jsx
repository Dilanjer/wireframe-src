import React from 'react'

import "./index.scss"

function MobileNav({ children, state }) {
  return (
    <div className={`mobile__nav ${state}`}>
      <div className="mobile__inner">
        {children}
      </div>
    </div>
  )
}

export default MobileNav
