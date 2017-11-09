import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

//Testing REMOVE_EXPENSE
test("should setup remove expense action object", () => {
  const targetAction = removeExpense({ id: "123abc" });
  expect(targetAction).toEqual({ 
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
  //toEqual has to be used (like ==) instead of toBe (like ===) cuz
  //in JS, 「{} === {}」 and「[] === []」 are both actually false...
  //So use toBe for booleans, numbers, and strings; toEqual for {} & []
});


//Testing EDIT_EXPENSE
test("should setup edit expense action object", () => {
  const targetAction = editExpense( "abc123", {
    description: "Frappuccino",
    note: "They raised the price! Grrr",
    amount: "7.05",
  });
  expect(targetAction).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      description: "Frappuccino",
      note: "They raised the price! Grrr",
      amount: "7.05",
    }
  })
});


//Testing ADD_EXPENSE
test("should setup add expense action object with provided values", () => {
  const hypotheticalExpense = {
    description: "Rent", 
    note: "Last month's rent",
    amount: 109500,
    createdAt: 1000,
  }
  const action = addExpense(hypotheticalExpense);
  
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...hypotheticalExpense,
      id: expect.any(String),
    }
  })
});


test("should setup add expense action object with default values", () => {
  expect(addExpense()).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});
