import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push("/"); //switch over user browser-routing (so no page-refresh)
        }}
      />
    </div>
  )
};

//We can leave the first parentheses empty because we don't need anything from the state
export default connect()(AddExpensePage);