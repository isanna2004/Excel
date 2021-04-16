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
  const [data, setData] = useState({});
  const FONT_STYLE = [{ Ж: "bold" }, { K: "italic" }, { Ч: "underline" }];
  const [arr, setArr] = useState(false);
  const [active, setActive] = useState([]);

  return (
    <div className="App">
      <div className="btn-group">
        {FONT_STYLE.map((btn) =>
          Object.keys(btn).map((name) => (
            <button
              className="btn-light"
              onClick={(e) => {
                e.currentTarget.classList.toggle("active");
                const isActiveStyle = e.currentTarget.classList.contains(
                  "active"
                );
                if (!active) return;
                const td = data[active] || {
                  value: "",
                  textStyles: [],
                };
                setData({
                  ...data,
                  [active]: {
                    ...td,
                    textStyles: isActiveStyle
                      ? [td.textStyles.join(" ")].concat(btn[name])
                      : [],
                  },
                });
              }}
            >
              <b>{name}</b>
            </button>
          ))
        )}
      </div>
      <div className="table" onFocus={(e) => setActive(e.target.classList[1])}>
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
                {[...Array(29).keys()].map((cell, id) => {
                  const tdId = `${number}:${id}`;
                  const tdData = data[tdId];
                  const textStyles = tdData ? tdData.textStyles : [];

                  return (
                    <td
                      className={`cell ${tdId} ${textStyles.join(" ")}  `}
                      key={cell.id}
                      contentEditable="true"
                      onClick={(e) => {
                        let value = e.currentTarget.textContent;
                      }}
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
