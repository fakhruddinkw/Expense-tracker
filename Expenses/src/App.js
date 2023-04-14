import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = async (expense) => {
    setExpenses((previousState) => {
      return [expense, ...previousState];
    });

    const response = await fetch("http://localhost:8080/addExpense", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await fetch("http://localhost:8080/");
        const expense = await data.json();
        const exp = expense.map((ex) => {
          return { ...ex, date: new Date(ex.date) };
        });
        setExpenses(exp);
      } catch (err) {
        console.log(err);
      }
    };

    fetching();
  }, []);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
