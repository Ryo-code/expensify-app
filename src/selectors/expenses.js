export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

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
