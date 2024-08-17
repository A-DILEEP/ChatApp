import React from "react";
import Cam from '../assets/cam.png'
import add from '../assets/add.png'
import more from '../assets/more.png'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Dileep</span>
        <div className="chatIcons">
          <img src={Cam} altsrc="Camera"/>
          <img src={add} altsrc="add"/>
          <img src={more} altsrc="more"/>
        </div>
      </div>
    </div>
  );
};

export default Chat;
