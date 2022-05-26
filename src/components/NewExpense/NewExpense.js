import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpensDataHandler = (enterdExpensData) => {
    const expensData = {
      ...enterdExpensData,
      id: Math.random().toString(),
    };

    onAddExpense(expensData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpensData={onSaveExpensDataHandler} stopEditingHandler={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
