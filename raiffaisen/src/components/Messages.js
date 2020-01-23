import React from "react";
import Message from "./Message.js";

function Messages(props) {
  const displayTheMessages = props.arrayOfMessages.map(m => <Message nameOfUser={m.name} messageOfUser={m.message}/>);
  return (
    <div>
       <div className = "message-container">
         {displayTheMessages}
       </div>
    </div>
  );
  }

export default Messages;