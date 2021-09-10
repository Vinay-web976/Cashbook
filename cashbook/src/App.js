import React, { useState } from "react";
import Popup from "./components/Popup";
import "./App.css";
import Transactions from "./components/Transactions";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [type, setType] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleButtonClick = (type) => {
    setIsPopupOpen(true);
    setType(type);
  };
  return (
    // https://youtu.be/yVEumtL8DVc
    <React.Fragment>
      <div className="App">
        <Header totalBalance={totalBalance} />
        <Transactions transactions={transactions} />
        <Footer handleButtonClick={handleButtonClick} />
      </div>
      {isPopupOpen && (
        <Popup
          type={type}
          setIsPopupOpen={setIsPopupOpen}
          setTransaction={setTransactions}
          currentTransaction={transactions}
          totalBalance={totalBalance}
          setTotalBalance={setTotalBalance}
        />
      )}
    </React.Fragment>
  );
}

export default App;
