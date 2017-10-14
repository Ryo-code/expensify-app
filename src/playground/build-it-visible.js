class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    }
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility //remember, the bang flips booleans
      }
    })
    // if(this.state.visibility){
    //   console.log("Visibility = true!")
    //   this.setState({ visibility: false})
    // }else{
    //   console.log("Visibility = false")
    //   this.setState({ visibility: true})
    // }
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          { this.state.visibility ? "Hide" : "Show" } details
        </button>
        {this.state.visibility && (
          <p>Hey. These are some details you can now see!</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));


/** The non-React version of the same code below... **/

// let visibility = false;
// const message = "Hey. These are some details you can now see!";

// const toggleVisibility = () =>{
//   visibility = !visibility; //flips the value of a boolean
//   render();
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}> 
//         { visibility ? "Hide details" : "Show details" }
//       </button>
//       { visibility && (
//         <p>"Hey. These are some details you can now see!"</p>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// }
// render();