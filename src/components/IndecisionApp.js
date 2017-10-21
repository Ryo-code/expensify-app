import React, { Component } from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }
  handleClearSelectedOption = () => {
    console.log("clicked!")
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
    console.log(`Your choice: ${option}`);
  }
  handleAddOption = (option) => { //Error messages, if you suck at adding options...
    if(!option){ //the 「!option」 means "if there's an empty string"
      return "Enter valid value to add";
    } else if (this.state.options.indexOf(option) > -1){
      return "This option already exists";
    }
    //If no errors... go ahead with this
    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json)//key-value pair
    }
  }
  componentWillUnmount() {
    console.log("Component will UNmount")
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return(
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}