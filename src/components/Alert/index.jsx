import React from 'react'

const Alert = ({ message, color}) => {
  return (
    <div class={ color } role="alert">
    { message }
  </div>

  )
}

export default Alert