import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    {/* Switch checks the path and goes one-by-one to see if there's a match, and renders only that page if it matches the route */}
    <Switch >
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));