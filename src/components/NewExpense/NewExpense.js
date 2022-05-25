import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const onSaveExpensDataHandler = (enterdExpensData) => {
    const expensData = {
      ...enterdExpensData,
      id: Math.random().toString(),
    };

    onAddExpense(expensData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensData={onSaveExpensDataHandler} />
    </div>
  );
};

export default NewExpense;
