import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (prop) => {
  const dropdownChangeHandler = (event) => {
    prop.onChangeFilter(event.target.value);
  };

  return (
    <>
      {prop.filterType === "year" && (
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={prop.selected} onChange={dropdownChangeHandler}>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
      )}
      {prop.filterType === "month" && (
        <div className="expenses-filter">
          <div className="expenses-filter__control">
            <label>Filter by month</label>
            <select value={prop.selected} onChange={dropdownChangeHandler}>
              <option value="All">All</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="July">July</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpensesFilter;
