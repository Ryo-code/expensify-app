import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss"

const ExpenseDashboardPage = () => (
  <div>
    this is from my dashboard component...
  </div>
);

const AddExpensePage = () => (
  <div>
    this is from my Add Expense component...
  </div>
);

const EditExpensePage = () => (
  <div>
    this is from my Edit Expense component...
  </div>
);

const HelpPage = () => (
  <div>
    this is from my Help component...
  </div>
);

const NotFoundPage = () => (
  <div>
    404! — <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    {/* activeClassName only applies when the user is on that page */}
    <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  {/* Switch checks the path and goes one-by-one to see if there's a match, and renders only that page if it matches the route */}
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));