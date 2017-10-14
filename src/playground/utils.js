console.log("utils.js is running");

export const square = (x) => x * x;
export const add = (a, b) => a + b;

export default (a, b) => a - b;;

export { square, add, subtract as default }; 
//The curly brackets are export syntax... NOT an object
//There can be only one default