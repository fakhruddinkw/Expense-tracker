import React from "react";
import Chart from "../Chart/Chart";
import PropTypes from "prop-types";

const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: "Jan", val: 0, ind: 0 },
    { label: "Feb", val: 0, ind: 1 },
    { label: "Mar", val: 0, ind: 2 },
    { label: "Apr", val: 0, ind: 3 },
    { label: "May", val: 0, ind: 4 },
    { label: "Jun", val: 0, ind: 5 },
    { label: "Jul", val: 0, ind: 6 },
    { label: "Aug", val: 0, ind: 7 },
    { label: "Sep", val: 0, ind: 8 },
    { label: "Oct", val: 0, ind: 9 },
    { label: "Nov", val: 0, ind: 10 },
    { label: "Dec", val: 0, ind: 11 },
  ];

  for (const expense of props.expenses) {
    const expenseIndex = expense.date.getMonth();
    chartDataPoint[expenseIndex].val += expense.amount;
  }

  return <Chart dataPoints={chartDataPoint} />;
};

ExpensesChart.propTypes = {
  expenses: PropTypes.array,
  onClickFilter: PropTypes.func,
};

export default ExpensesChart;
