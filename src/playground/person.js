// const isAdult = (age) => age >= 18
// const canDrink = (age) => age >= 18
// export { isAdult, canDrink };

// export default (age) => age >= 65

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };
