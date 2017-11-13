import moment from "moment";

export default [{
  id: '1',
  description: "Gym",
  note: "w00t w00t",
  amount: 12500,
  createdAt: 0
},
{
  id: '2',
  description: "Rent",
  note: "w00t w00t",
  amount: 26500,
  createdAt: moment(0).subtract(4, "days").valueOf()
},
{
  id: '3',
  description: "Credit card",
  note: "w00t w00t",
  amount: 4200,
  createdAt: moment(0).add(4, "days").valueOf()
}];