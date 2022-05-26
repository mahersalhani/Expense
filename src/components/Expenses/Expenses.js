import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((el, i) => {
      return (
        <ExpenseItem
          //
          key={i}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      );
    });
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
