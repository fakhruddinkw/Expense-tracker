import React from "react";
import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";
const ExpenseItem = (prop) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={prop.date} />
        <div className="expense-item__description">
          <h2>{prop.title}</h2>
          <div className="expense-item__price">${prop.amount}</div>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.instanceOf(Date),
};

export default ExpenseItem;
