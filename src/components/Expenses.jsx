import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((exp) => (
        <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
      ))}
    </Card>
  );
}

export default Expenses;