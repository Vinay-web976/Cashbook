import React from "react";

const Footer = ({ handleButtonClick }) => {
  return (
    <footer>
      <div className="action-group">
        <button className="red" onClick={() => handleButtonClick("OUT")}>
          OUT
        </button>
        <button className="green" onClick={() => handleButtonClick("IN")}>
          IN
        </button>
      </div>
    </footer>
  );
};

export default Footer;
