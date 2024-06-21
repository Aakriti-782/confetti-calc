import React from "react";

const DisplayWindow = ({ displayEXP, result }) => {
  return (
    <div className="displayWindow">
      {result !== "" ? (
        <div className="result">{result}</div>
      ) : (
        <div className="expression">{displayEXP}</div>
      )}
    </div>
  );
};

export default DisplayWindow;
