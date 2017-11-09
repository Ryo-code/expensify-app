import moment from "moment";

//Get visible expenses...
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true; 
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    //str.includes(searchString) <- "if searchString is inside of str... then return 「true」"

    return startDateMatch && endDateMatch && textMatch; 
    //If all three of these exist, then it's a match and the item will be kept in the array. Otherwise, removed from the array.
  }).sort((a, b) => {
    if (sortBy === "date"){
      return a.createdAt < b.createdAt ? 1 : -1; //1 = b comes first... -1 = a comes first
    } else if (sortBy === "amount"){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
