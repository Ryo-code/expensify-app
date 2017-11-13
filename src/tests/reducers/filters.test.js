import filtersReducer from "../../reducers/filters";
import moment from "moment";
import expenses from "../fixtures/expenses";

describe("Filters filter", () => {
  test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
      text: "",
      sortBy: "date",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    });
  });
  //When a store is created, the「@@INIT」action is dispatched 
  //so that every reducer returns their initial/default state 
  //(to populate the initial state tree)
  
  test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
      // expect(state).toEqual({
      //   text: "",
      //   sortBy: "amount",
      //   startDate: moment().startOf("month"),
      //   endDate: moment().endOf("month")
      // });
  });
  
  test("should set sortBy to date", () => {
    const currentState = {
      text: "",
      sortBy: "amount",
      startDate: undefined,
      endDate: undefined,
    };
    const action = { type: "SORT_BY_DATE"};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
  });
  
  //should set text filter
  test("should set text filter", () => {
    const text = "This is my filter";
    const action = { type: "SET_TEXT_FILTER", text: text};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
  });
  
  //should set startDate filter
  test("should set startDate filter", () => {
    const startDate = moment(0).add(3, "days").valueOf();
    const action = { type: "SET_START_DATE", startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
  });
  
  //should set endDate filter
  test("should set endDate filter", () => {
    const endDate = moment();
    const action = { type: "SET_END_DATE", endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
  });
});
