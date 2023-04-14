import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    prop.onAddExpense(expense);
    setShowForm(false);
  };

  const startEditing = () => {
    setShowForm((previousState) => {
      return !previousState;
    });
  };

  const stopEditing = () => {
    setShowForm((previousState) => {
      return !previousState;
    });
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={startEditing}> Add new Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
