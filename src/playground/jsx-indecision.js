console.log("app.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer",
  options: [],
}

//JSX – JavaScript XML
const user = {
  name: "Ryo",
  age: 109,
  location: "Space",
};

const onFormSubmit = (e) => {
  e.preventDefault(); //stops a full-page refresh
  const option = e.target.elements.option.value
  if(option.length > 0){
    app.options.push(option);
    e.target.elements.option.value = ""; //clears the input
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

// create removeAll button above list

// ReactDOM.render(template, appRoot);
const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subtitle && <p> {app.subtitle} </p> }
      <p>{app.options.length > 0 ? "Here are your options..." : "No options."}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>
      
      <ol>
      {
        app.options.map((option) => <li key={option + option.length}> {option} </li>)
      }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);  
}
render();