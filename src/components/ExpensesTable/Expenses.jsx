import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../addNewExpense/expenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(" ");

  const selectedYearHandler = (recievedYear) => {
    setYear(recievedYear);
    console.log(year);
  };

  return (
    <>
      <ExpensesFilter onSelectedYear={selectedYearHandler} />
      <Card className="expenses">
        {props.expenses.map((exp) => (
          <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
