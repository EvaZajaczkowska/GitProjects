import React from "react";

class Input extends React.Component {
  state = {
    inputName: "",
    inputMessage: ""
  };

  handleInputName = (event) => {
    const inputName = event.target.value;

    this.setState({
      inputName
    });
  }

  handleInputMessage = event => {

    const inputMessage = event.target.value;

    this.setState({
      inputMessage
    });
  }
   handleSubmit = event => {
     event.preventDefault();
      

     const obj = {
      name: this.state.inputName,
      msg: this.state.inputMessage
     };
     console.log("app", obj);
    
      this.props.parentMsgToState(obj);
      // jetzt ist zeit die parent callback function zu callen 
      // parentMsgToSTate is my key welchen ich hier aufrufe , props ist ein object der Key benötigt 
      //hier sende ich die zwei parameter in einem objekt up 
      //messageTo State is the callback function 
      //block scope of object 
   }; 
  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
            <input onChange={this.handleInputName} value={this.state.inputName} type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
          </div>
          <div className="col">
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
            <input onChange={this.handleInputMessage} value={this.state.inputMessage} type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />

          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>

          </div>
        </div>
      </form>
    )
  }
}

export default Input;
