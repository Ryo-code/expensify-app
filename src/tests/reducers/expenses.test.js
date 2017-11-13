import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

describe("Expenses reducer", () => {
  test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
  });

  test("should remove expense by id", () => {
    const action = { 
      type: "REMOVE_EXPENSE",
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
  })

  test("should not remove expense if id is not found", () => {
    const action = { 
      type: "REMOVE_EXPENSE",
      id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
  });

  test("should add an expense", () => {
    const action = {
      type: "ADD_EXPENSE",
      expense: {
        id: 109,
        description: "Mug of hot chocolate",
        note: "Delicious! Yum",
        amount: 320,
        createdAt: 0
      }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
  })

  test("should edit an expense", () => {
    const action = {
      type: "EDIT_EXPENSE",
      id: expenses[0].id,
      updates: {
        //maybe I ONLY wanna update a single value
        note: "It turns out that this was an awful purchase!!"
      }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(action.updates.note);
  });

  test("should not edit expense if expense isn't found", () => {
    const action = {
      type: "EDIT_EXPENSE",
      id: "-1",
      updates: {
        note: "It turns out that this was an awful purchase!!"
      }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  })
});
