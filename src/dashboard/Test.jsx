import { useState, useRef } from "react"


const Test = () => {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.click();
  }
  return (
    <div>
      <div onClick={handleClick}>
      <img src="./assets/google.png" alt="" />
      <input type="file" ref={inputRef} />
      </div>
    </div>
  )
}

export default Test
