import React, { useState } from "react";
import "./App.css";

function App() {
  const ALPHABET = [
    "►",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "AA",
    "AB",
    "AC",
  ];
  const [Change, setChange] = useState(false);
  const FONT_STYLE = [{ Ж: "bold" }, { K: "italic" }, { Ч: "underline" }];
  const [style, setStyle] = useState([]);
console.log(style)
  return (
    <div className="App">
      <div className="btn-group">
        {FONT_STYLE.map((btn) =>
          Object.keys(btn).map((name) => (
            <button
              className="btn-light"
              onClick={(e) => {
                e.currentTarget.classList.toggle("active");
                e.currentTarget.classList.contains("active")
                  ? setStyle(style.concat(btn[name]))
                  : setStyle(style.slice(0, style.indexOf(btn[name])));
              }}
            >
              <b>{name}</b>
            </button>
          ))
        )}
      </div>
      <div className="table">
        <table className="table">
          <thead>
            <tr>
              {ALPHABET.map((letter) => (
                <th className="letter">{letter}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(100).keys()].map((number) => (
              <tr>
                <th className="numbers p-0" style={{ width: "10px" }}>
                  {number}
                </th>
                {[...Array(29).keys()].map((cell, id) => (
                  <td
                    className="cell"
                    key={cell.id}
                    contenteditable="true"
                    onClick={(e) => {
                      let value = e.currentTarget.textContent;
                      style.map((name) =>
                        e.currentTarget.classList.add(`${name}`)
                      );
                    }}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
