import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/AddExpensePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      {/* Switch checks the path and goes one-by-one to see if there's a match, and renders only that page if it matches the route */}
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        {/* Components in Route tags will receive props from react-router-dom  */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;