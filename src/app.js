import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

//addExpense -> water bill
//addExpense -> gas bill
store.dispatch(addExpense({ description: "water bill"}));
store.dispatch(addExpense({ description: "gas bill"}));
store.dispatch(addExpense({ description: "business dinner"}));

//setTextFilter -> bill (2 items) -> water (1 item)
//getVisibleExpenses -> print visible ones to the screen
store.dispatch(setTextFilter("bill"));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
