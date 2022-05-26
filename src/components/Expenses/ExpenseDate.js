import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const setDay = new Date(props.date);
  const month = setDay.toLocaleString("en-US", { month: "long" });
  const day = setDay.toLocaleString("en-US", { day: "2-digit" });
  const year = setDay.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
