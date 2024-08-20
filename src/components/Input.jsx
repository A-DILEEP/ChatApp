import React from 'react'
import Img from '../assets/img.png'
import Attach from '../assets/attach.png'
const Input = () => {
  return (
    <div className="input">
       <input type="text" placeholder='Type something ' />
       <div className="send">
        <img src={Attach} alt="image" />
        <input type="file" id="file" style={{display:'none'}} />
        <label htmlFor="file">
          <img src={Img} alt="file" />
        </label>
        <button>Send</button>
       </div>
    </div>
  )
}

export default Input
