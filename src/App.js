import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { DUMMY_EXPENSES } from "./data";
import useLocalStorage from "./hook/useLocalStorage";

const App = () => {
  const [expenses, setExpenses] = useLocalStorage("data", DUMMY_EXPENSES);

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      let data = [expense, ...prevExpenses];
      localStorage.setItem("data", JSON.stringify(data));
      return data;
    });
  };

  const deleteExpenseHandler = (el) => {
    let itemDeleteed = expenses.filter((item) => {
      return item.id !== el.id;
    });
    setExpenses(itemDeleteed);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
};

export default App;
