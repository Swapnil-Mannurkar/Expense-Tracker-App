import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (identifier, value) => {
    if (identifier === "title") setUserInput({ ...userInput, title: value });
    if (identifier === "amount") setUserInput({ ...userInput, amount: value });
    if (identifier === "date") setUserInput({ ...userInput, date: value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(newExpenseData);

    setUserInput({
      ...userInput,
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) => onChangeHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) => onChangeHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={userInput.date}
            onChange={(event) => onChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
