import React from "react";


function Message(props) {
  return (
    <div>
        <span><b>{props.nameOfUser}</b></span><span>{props.messageOfUser}</span>
    </div>
  );
}


export default Message;