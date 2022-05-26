import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteItem = () => {
    props.delete(props);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="holder">
          <div className="expense-item__price">${props.amount}</div>
          <button className="delete" onClick={deleteItem}>
            delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
