import { createStore, combineReducers } from 'redux';
import uuid from "uuid"; //gives random id

/***** Action Generators ****/
// ADD_EXPENSE
const addExpense = ( 
  {                   //...the user inputs these four things
    description = '', //(and they all have default values)
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}              //...if the user didn't input them, default to empty object
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id // =  id: id  
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: 'SET_TEXT_FILTER',
  text
});



//SORT_BY_AMOUNT
const sortByAmount = () => {};

//SORT_BY_DATE
const sortByDate = () => {};





// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id); 
      //Filter works by keeping w/e is true (boolean). If false, drop it
    case 'EDIT_EXPENSE':
    //////////////////////////////////////////////
      return state.map((expense) => {
        if (expense.id === action.id){
          return {
            ...expense,       //This object spread operator takes the expense...
            ...action.updates //and allows you to override(update)/add values
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}

// Filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}


/************ Store Creation ************/
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setTextFilter("rent")); //<--(TODO: Make this work)

// const demoState = {
//   expenses: [{
//     id: "whatever",
//     description: "January Rent",
//     note: "This was the final payment for that address",
//     amount: 54500, //in cents
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };


const user = {
  name: "Jen",
  age: 24
}

// console.log({
//   ...user,
//   location: "Toronto", //adds location
//   age: 27 //overrides the initial value of "age" key (because it comes AFTER/below the user object)
// });

