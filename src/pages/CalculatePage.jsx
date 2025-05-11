import React, { useState } from "react";
import "../App.css";

const CalculatePage = () => {
  console.log("렌더링됨");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const Display = ({ input, result }) => (
    <div className="input">
      <div>{input || "0"}</div>
      <div className="result">{result}</div>
    </div>
  );

  const Buttons = ({ onButtonClick }) => {
    const buttons = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      ["0", ".", "=", "+"],
      ["AC"],
    ];

    return (
      <div>
        {buttons.map((row, rowIndex) => (
          <div className="btnWrapper" key={rowIndex}>
            {row.map((btn) => (
              <button
                className={`${btn === "AC" ? "ac-btn" : "btn"}`}
                key={btn}
                onClick={() => onButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons
        onButtonClick={(value) =>
          value === "="
            ? calculateResult()
            : value === "AC"
            ? clearInput()
            : handleClick(value)
        }
      />
    </div>
  );
};

export default CalculatePage;
