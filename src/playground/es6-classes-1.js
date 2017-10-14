class Person {
  constructor(name = "Anonymous", age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home){
    super(name, age);
    this.home = home;
  }
  hasHome(){
    return !!this.home;
  }
  getGreeting(){
    let greeting= super.getGreeting();
    if (this.hasHome()){
      greeting += ` I'm visiting from ${this.home}.`;
    }
    return greeting;
  }
}

const me = new Traveler("Ryo Blah", 23, "Winnipeg");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "nowhere");
console.log(other.getGreeting());