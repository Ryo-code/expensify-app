// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
//used to be 「const expensesReducer = (state = expensesReducerDefa...」
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
