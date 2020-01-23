import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Message from "./components/Message";
import Messages from "./components/Messages";
import Input from "./components/Input";


class App extends React.Component {
 state = {
   messages: []
 };
 messageToState = (obj) => {
   const messages = this.state.messages;

   messages.push(obj);

   this.setState({
     messages: messages 
   });
   console.log(this.state.messages);
   //console.log(obj);
 };
 // obj i den klammern ist quasi ein parameter 
//das ist die callback funktion die wir in the input callen möchten  
// das ist eine javascript funktion 
 
  
  render() {
    return(
      <div className="container">
      <Messages arrayOfMessages={this.state.messages}/>
      <Input parentMsgToState={this.messageToState} />
      </div>
    )
  }
};







export default App;
