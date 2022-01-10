import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expense(props) {
  const [yearSelect, setYearSelect] = useState("2022");

  const selectYearHandler = (year) => {
    setYearSelect(year);
    
  };

  const filteredItems = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelect;
  })

  return (
    <div>
      <div className="card">
        <Card className="expenses">
          <ExpensesFilter
            defaultSelectedYear={yearSelect}
            onYearSelect={selectYearHandler}
          />
          <AddExpense />
          {filteredItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Expense;
