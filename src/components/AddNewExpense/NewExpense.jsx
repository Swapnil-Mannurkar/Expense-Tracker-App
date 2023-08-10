import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NexExpense = (props) => {
  const saveExpenseDataHandler = (recievedExpenseData) => {
    const expenseData = {
      ...recievedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddNewExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NexExpense;
