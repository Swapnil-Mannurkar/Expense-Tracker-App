import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;

  if (props.items.length > 0)
    return (
      <ul className="expenses-list">
        {props.items.map((exp) => (
          <li>
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          </li>
        ))}
      </ul>
    );
};

export default ExpensesList;
