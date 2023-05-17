import React from 'react'

export const Clicker = ({onClick}) => {


  return (
    <div>
        <button onClick={() => {handleClick("He said Yes!")}}>Yes!</button>
        <button onClick={() => {handleClick("He said No!!")}}>No!</button>
    </div>
  )

  
}
