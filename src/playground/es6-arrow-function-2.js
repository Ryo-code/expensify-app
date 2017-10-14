const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(1, 4))

const user = {
  name: "Ryo",
  cities: ["Tokyo, Manchester, Toronto"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived() );

const multiplier = {
  numbers: [1, 3, 4, 6],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
  //numbers - array of numbers
  //multiplyBy - a single number
  //multiply - return a new array where the numbers have been multiplied
}
console.log(multiplier.numbers + " becomes...")
console.log(multiplier.multiply());