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
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})


//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})


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
      //Filter works by keeping w/e is true (boolean). If false, drop it.
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,       //This object spread operator takes the expense...
            ...action.updates //and allows you to override(update)/add values
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
  
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
      case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
      case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        };
    default:
      return state;
  }
}

/********* Get Visible Expenses *********/
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch; 
    //If all three of these exist, then it's a match and the item will be kept in the array. Otherwise, removed from the array.
  }).sort((a, b) => {
    if (sortBy === "date"){
      return a.createdAt < b.createdAt ? 1 : -1; //1 = b comes first... -1 = a comes first
    } else if (sortBy === "amount"){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

/************ Store Creation ************/
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); //startDate of 125
// store.dispatch(setStartDate()); //undefined
// store.dispatch(setEndDate(1250)); //endDate 1250

// store.dispatch(setTextFilter("rent")); //<--(TODO: Make this work)

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

