import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import PropTypes from "prop-types";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredMonth, setFilteredMonth] = useState("Jan");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const monthChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredMonth === "All") {
      return expense.date.getFullYear() == filteredYear;
    } else {
      return (
        expense.date.getFullYear() == filteredYear &&
        expense.date.toLocaleString("en-US", { month: "short" }) ===
          filteredMonth
      );
    }
  });

  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterType={"year"}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseFilter
          filterType={"month"}
          selected={filteredMonth}
          onChangeFilter={monthChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.array,
};

export default Expenses;
