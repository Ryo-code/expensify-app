import React, { Component } from "react";

export default class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault(); //stops a full-page refresh
    const inputtedOption = e.target.elements.optionAdd.value.trim();
    const error = this.props.handleAddOption(inputtedOption);

    this.setState(() => ({ error }))
    // this.setState(() => {
    //   return { error }; //Same as "error: error"
    // });
    if (!error) {
      e.target.elements.option.value = "" //clears the input box
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="optionAdd"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
};