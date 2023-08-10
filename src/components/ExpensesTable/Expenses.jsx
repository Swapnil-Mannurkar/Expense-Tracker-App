import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../expenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const selectedYearHandler = (recievedYear) => {
    setfilteredYear(recievedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          year={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
