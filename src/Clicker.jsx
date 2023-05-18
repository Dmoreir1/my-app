import React from 'react'

export const Clicker = ({onClicked}) => {

  const handleClick = (message) => {
    console.log(message)
  }
  return (
    <div>
        <button onClick={() => onClicked('He said Yes!!!')}>Yes!</button>
        <button onClick={() => onClicked("He said No!!")}>No!</button>
    </div>
  )
}
