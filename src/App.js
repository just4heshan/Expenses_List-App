import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Grocery",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 1, 2),
  },
];

const App = () =>  {
  
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addEnteredExpenseDataHandler= (enteredExpenseData) => {
      setExpenses((prevExpenses) => {
        return [enteredExpenseData, ...prevExpenses];
      });
  };

  return (
    <div>
      <div><NewExpense 
          onShowEnteredData={addEnteredExpenseDataHandler}
        /></div>
      <div><Expense items = {expenses} /></div>
      
    </div>
  );
}

export default App;
