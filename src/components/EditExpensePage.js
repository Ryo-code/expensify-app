import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';

const EditExpensePage = (props) => {
  // console.log("props!", props);
  return (
    <div>
      Editing the expense with the id of {props.match.params.id} 
    </div>
  )
};

export default EditExpensePage