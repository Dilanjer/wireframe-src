import React from 'react'
import "./index.scss"

function BlockTitle({ title, subTitle }) {
  return (
    <div className="block-title-content">
      <div className="block__title">{title}</div>
      <div className="block__subtitle">{subTitle}</div>
    </div>
  )
}

export default BlockTitle
