import React, { useState } from "react";

const Popup = ({
  type,
  setIsPopupOpen,
  setTransaction,
  currentTransaction,
  totalBalance,
  setTotalBalance,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [note, setNote] = useState("");

  const handleChange = ({ currentTarget }) => {
    setInputValue(currentTarget.value);
  };
  const handleNoteChange = ({ currentTarget }) => {
    setNote(currentTarget.value);
  };

  const handleSubmit = () => {
    const transToBeAdded = {
      amount: inputValue,
      note: note,
      type: type,
      time: new Date(),
    };
    const newTransaction = [...currentTransaction, transToBeAdded];

    type === "OUT"
      ? setTotalBalance(totalBalance - parseFloat(inputValue))
      : setTotalBalance(totalBalance + parseFloat(inputValue));

    setTransaction(newTransaction);
    setIsPopupOpen(false);
  };
  return (
    <div className="model">
      <div className="model-content">
        <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
          Close
        </button>
        <input
          type="number"
          placeholder="Rs 0.00"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          placeholder="Enter note"
          value={note}
          onChange={(e) => handleNoteChange(e)}
        ></textarea>
        <button
          className={type === "OUT" ? "red-btn" : "green-btn"}
          onClick={handleSubmit}
        >
          {type}
        </button>
      </div>
    </div>
  );
};

export default Popup;
