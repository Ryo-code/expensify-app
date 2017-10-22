import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      {/* activeClassName only applies when the user is on that page */}
      <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  )
};

export default Header;