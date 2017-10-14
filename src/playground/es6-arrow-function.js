const square = function (x) {
  return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(3));

const fullName = "John Smith";
const getFirstName = (name) => {
  return name.split(" ")[0];
}
console.log("First name:", getFirstName(fullName));

const getFirstNameShorter = (fullName) => fullName.split(" ")[0];
console.log("First name:", getFirstNameShorter(fullName));
