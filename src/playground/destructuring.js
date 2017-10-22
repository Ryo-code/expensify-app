// const person = {
//   name: "Ryo",
//   age: 40,
//   location: {
//     city: "Tokyo",
//     temp: 30
//   }
// };

// const { name: firstName = "anonymous", age } = person;
// //"name: firstName" renames name to firstName (kind of like "import whatever as w/e from...")
// //the "= 'anonymous'" gives name (now "firstName") default value of "anonymous"
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location; 
// if (city && temperature){
//   console.log(`It's ${temperature} in ${city}.`)
// }


/* Small Object Destructuring example */
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    // name: "Penguin"
  }
};

const { name: publisherName = "self-published" } = book.publisher;
console.log(publisherName); //penguin, (default: self-published)



/* Small Array Destructuring example */
const address = ["123 Fake Street", "Winnipeg", "Manitoba", "R3N0P3"];
const [ , myCity, province = "Ontario" ] = address;
console.log(`You are in ${myCity}, ${province} `);

const item = [ "Coffee (hot)", "$2.00", "$2.50", "$3.00" ];
const [ itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);



const add = ({ a, b }, c) => { //this actually will destructure the object so that you don't need to see the top-level key-value pair
return a + b + c;
}

console.log(add({a: 1, b: 12}, 100));