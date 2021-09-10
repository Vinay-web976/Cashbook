import React from "react";
import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <main>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            key={transaction.time.toString()}
          />
        ))
      ) : (
        <div className="transaction" style={{ justifyContent: "center" }}>
          <p>No Entries Found</p>
        </div>
      )}
    </main>
  );
};

export default Transactions;
