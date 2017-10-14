class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    }
  }
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
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(`Your choice: ${option}`);
  }
  handleAddOption(option){ //Error messages, if you suck at adding options...
    if(!option){ //the 「!option」 means "if there's an empty string"
      return "Enter valid value to add";
    } else if (this.state.options.indexOf(option) > -1){
      return "This option already exists";
    }
    //If no errors... go ahead with this
    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = { 
  //If you don't specify "title" prop, default to this...
  title: "Indecision!",
}

const Action = (props) =>{
  return (
    <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All </button>
      {props.options.length === 0 && <p> Please add an option to get started! </p>}
      {
        props.options.map((option) => (
          <Option 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            key={option}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
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
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionAdd"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
};

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));