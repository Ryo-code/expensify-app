import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1> Expense List </h1>
    {props.expenses.map((item) => {
      // console.log("props", props)
      return (
        <ExpenseListItem {...item} key={item.id}/>
      )
    })}
    {props.expenses.length + "10"}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);