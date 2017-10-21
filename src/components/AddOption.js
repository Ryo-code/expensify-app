import React, { Component } from "react";

export default class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    console.log("E!", e)
    console.log("target!", e.target)
    console.log("elements!", e.target.elements)
    e.preventDefault(); //stops a full-page refresh
    const option = e.target.elements.addOption.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    
    if (!error) {
      e.target.elements.addOption.value = ""; //clears the input box
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="addOption"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
};