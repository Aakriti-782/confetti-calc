import React from "react";

const KeysWindow = ({ handleButton }) => {
  const keys = [
    "(", ")", "mc", "m+", "m-", "mr", "C", "+/-", "%",
    "÷", <span key="2nd">2<sup>nd</sup></span>, "x²", "x³", "xʸ", "eˣ", "10ˣ", "7", "8",
    "9", "X", "¹/x", "²√x", "³√x", "ʸ√x", "ln", "log₁₀", "4",
    "5", "6", "-", "x!", "sin", "cos", "tan", "e",
    "EE", "1", "2", "3", "+", "Rad", "sinh", "cosh", "tanh", "π", "Rand", "0", ".", "=",
  ];


  const isNumberOrDecimal = (item) => {
    return !isNaN(item) || item === ".";
  };

  return (
    <div className="keysWindow">
      <div className="keys_grid">
        {keys.map((item, index) => (
          <button
            key={index}
            className={`keyButton ${isNumberOrDecimal(item) ? "number" : ""} ${
              item === "=" ? "equal" : ""
            } ${item === "0" ? "zero" : ""} ${
              (index + 1) % 9 === 0 ? "last-column" : ""
            }`}
            onClick={() => handleButton(item)}
            style={{ gridColumn: item === "0" ? "span 2" : "span 1", fontWeight: "bold" }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;
