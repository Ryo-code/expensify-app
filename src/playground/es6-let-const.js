var nameVar = "Ryo";
var nameVar = "Vince";
console.log("naveVar", nameVar);

let nameLet = "Jen";
console.log("nameLet", nameLet)
nameLet = "Julie"

const nameConst = "Frank";
console.log("nameConst", nameConst);

//Block scoping
var fullName = "Ryo Blah";
let firstName
if(fullName){
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log("second time for the first name...", firstName)