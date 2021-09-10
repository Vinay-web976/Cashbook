import React from "react";

const Transaction = ({ transaction }) => {
  console.log(transaction);
  return (
    <div className="transaction">
      <div className="entry">
        <p>{transaction.time.toString()}</p>
        <h1>{transaction.note}</h1>
      </div>
      <div className="entry out">
        <h1>Out</h1>
        <p>{transaction.type === "OUT" ? transaction.amount : "-"}</p>
      </div>
      <div className="entry in">
        <h1>In</h1>
        <p>{transaction.type === "IN" ? transaction.amount : "-"}</p>
      </div>
    </div>
  );
};

export default Transaction;
