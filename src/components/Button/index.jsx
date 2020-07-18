import React from 'react'
import "./index.scss"

function Button({ className, children, address, onClick }) {
  return (
    <a onClick={onClick} href={address} className={className}>{children}</a >
  )
}

export default Button
