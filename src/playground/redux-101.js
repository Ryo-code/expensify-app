import { createStore } from "redux";

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy //same as 「incrementBy: typeof incrementBy === "number" ? incrementBy : 1」
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => { //subscribe waits for changes to the store
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));  //...5
store.dispatch(decrementCount({ decrementBy: 6 }));  // ...-1
store.dispatch(resetCount());                        //...0
store.dispatch(decrementCount({ decrementBy: 10 })); //...-10
store.dispatch(setCount({ count: 64 }));             //...64


