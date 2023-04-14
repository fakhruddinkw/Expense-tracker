import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import PropTypes from "prop-types";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Data</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

ExpensesList.propTypes = {
  items: PropTypes.array,
};

export default ExpensesList;
