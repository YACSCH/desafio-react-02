import React from 'react'

const Alert = ({ message, color}) => {
  return (
    <div className={ color } role="alert">
    { message }
  </div>

  )
}

export default Alert