import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      404! — <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFoundPage;