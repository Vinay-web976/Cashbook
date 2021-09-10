import React from "react";

const Header = ({ totalBalance }) => {
  return (
    <header>
      <div className="book__name">
        <h1>MY CASHBOOK</h1>
      </div>
      <div className="today-balance">
        <h1>{totalBalance}</h1>
        <p>Today's Balance</p>
      </div>
    </header>
  );
};

export default Header;
