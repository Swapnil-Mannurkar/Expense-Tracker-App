import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NexExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => setDisplayForm(!displayForm);

  const saveExpenseDataHandler = (recievedExpenseData) => {
    const expenseData = {
      ...recievedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpenseData(expenseData);
    toggleDisplayForm();
  };

  return (
    <div className="new-expense">
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleDisplayForm}
        />
      )}
      {!displayForm && (
        <button onClick={toggleDisplayForm}>Add new expense</button>
      )}
    </div>
  );
};

export default NexExpense;
