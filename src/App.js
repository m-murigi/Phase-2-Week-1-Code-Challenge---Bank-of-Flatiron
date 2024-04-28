import React, { useState } from "react";
import Transactions from "./component.js/Transactions";
import SearchForm from "./component.js/SearchForm";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      Date: "2024-04-26",
      Description: "Wi-fi subscription",
      Category: "Utilities",
      Amount: "2000",
    },
    {
      Date: "2024-04-25",
      Description: "Movies",
      Category: "Entertainment",
      Amount: "1000",
    },
    {
      Date: "2024-04-24",
      Description: "Shopping",
      Category: "Utilities",
      Amount: "4500",
    },
    {
      Date: "2024-04-23",
      Description: "Paycheck from the sacco",
      Category: "Income",
      Amount: "300000",
    },
    {
      Date: "2024-04-22",
      Description: "Car Service",
      Category: "Expense",
      Amount: "7500",
    },
    {
      Date: "2024-04-21",
      Description: "School fees payment",
      Category: "Utilities",
      Amount: "100000",
    },
  ]);

  //  to handle search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.Description.toLowerCase().includes(query) ||
        transaction.Category.toLowerCase().includes(query)
    );
    setTransactions(filteredTransactions);
  };

  //  to handle update
  const handleUpdate = (id, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id
        ? { ...transaction, ...updatedTransaction }
        : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <header id="heading">
        <h1>The Royal Bank of Flatiron</h1>
      </header>
      <SearchForm handleSearch={handleSearch} />
      <Transactions transactions={transactions} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
