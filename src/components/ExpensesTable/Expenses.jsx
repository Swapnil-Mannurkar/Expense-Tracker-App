import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../addNewExpense/expenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const selectedYearHandler = (recievedYear) => {
    setfilteredYear(recievedYear);
  };

  const displayFilteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter year={filteredYear} onSelectedYear={selectedYearHandler} />
        {displayFilteredExpenses.map((exp) => (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
