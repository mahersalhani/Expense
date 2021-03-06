import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((el, i) => {
        return (
          <ExpenseItem
            //
            key={i}
            id={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
            delete={props.onDeleteExpense}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
