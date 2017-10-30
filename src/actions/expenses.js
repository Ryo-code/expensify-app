import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ( 
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
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

