import React, { useState } from "react";

function Transactions({ transactions }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = () => {
    if (!date || !description || !category || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    // new transaction object
    const newTransaction = {
      id: transactions.length + 1,
      Date: date,
      Description: description,
      Category: category,
      Amount: amount,
    };

    // Add the new transaction to the list of transactions
    transactions.push(newTransaction);

    // Clear the input
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="date"
          id="date-input"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          id="description-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          id="category-input"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          id="amount-input"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.Date}</td>
              <td>{transaction.Description}</td>
              <td>{transaction.Category}</td>
              <td>{transaction.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
