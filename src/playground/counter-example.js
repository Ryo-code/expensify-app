//include componentDidMount & componentWillMount
//use localStorage to persist the data
//Test the count, refresh, make sure it stays

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    }
  }
  componentDidMount(){
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);

      if(!isNaN(count)){
        this.setState(() => ({ count }))
      }
    } catch (error){
      console.log("error", error);      
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){ //"only if the count changed"
      const json = JSON.stringify(this.state.count);
      localStorage.setItem("count", json) //key-value pair
    }
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne(){
    if(this.state.count > 0){
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        }
      })
    }
  }
  handleReset(){
    // this.setState({ count: 0}) //OLDSCHOOL way of setting state... unreliable! (because setState is asyncronous)
    this.setState(() => {
      return {
        count: 0
      };
    });
  };

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> reset </button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById("app"))