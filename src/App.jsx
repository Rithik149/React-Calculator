import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [display, setCalcDisplay] = useState("");
  const [display_ans, setAnsDisplay] = useState("");

  function clearScreen() {
    setAnsDisplay("");
    setCalcDisplay("");
  }

  function handleOperator(e) {
    const value = e.target.textContent;
    setCalcDisplay((prev) => prev + value);
    setAnsDisplay(value);
  }

  function handleNumber(e) {
    const value = e.target.textContent;
    setCalcDisplay((prev) => prev + value);
    setAnsDisplay((prev) => prev + value);
  }

  function calc() {
    try {
      const result = evaluate(display);
      setAnsDisplay(result);
    } catch (err) {
      console.log(err);
      setAnsDisplay("Math Error");
    }
  }

  return (
    <>
      <div className="container">
        <div className="casio">
          <div className="formulaScreen">{display}</div>
          <div className="outputScreen">{display_ans}</div>
          <div className="button-container">
            <button id="ac" onClick={clearScreen}>
              AC
            </button>
            <button id="divison" onClick={handleOperator}>
              /
            </button>
            <button id="multiply" onClick={handleOperator}>
              *
            </button>
            <button id="seven" onClick={handleNumber}>
              7
            </button>
            <button id="eight" onClick={handleNumber}>
              8
            </button>
            <button id="nine" onClick={handleNumber}>
              9
            </button>
            <button id="minus" onClick={handleOperator}>
              -
            </button>
            <button id="four" onClick={handleNumber}>
              4
            </button>
            <button id="five" onClick={handleNumber}>
              5
            </button>
            <button id="six" onClick={handleNumber}>
              6
            </button>
            <button id="plus" onClick={handleOperator}>
              +
            </button>
            <button id="one" onClick={handleNumber}>
              1
            </button>
            <button id="two" onClick={handleNumber}>
              2
            </button>
            <button id="three" onClick={handleNumber}>
              3
            </button>
            <button id="equal" onClick={calc}>
              =
            </button>
            <button id="zero" onClick={handleNumber}>
              0
            </button>
            <button id="dot" onClick={handleNumber}>.</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
