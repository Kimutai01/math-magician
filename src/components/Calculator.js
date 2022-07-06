/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setData] = useState({
    obj: { total: 0, next: '', operation: '' },
  });
  const eventHandler = (e) => {
    const val = e.target.textContent;
    setData(({ obj }) => ({ obj: calculate(obj, val) }));
  };
  const results = `
    ${
  data.obj.total || data.obj.operation || data.obj.next
    ? `${data.obj.total || ''} ${data.obj.operation || ''} ${
      data.obj.next || ''
    }`
    : 0
}`;
  return (
    <div className="calcDiv">
      <div className="title">
        <h1>Lets do some math</h1>
      </div>
      <div className="calculator">
        <div className="output__section">
          <div className="current">{results}</div>
        </div>

        <div className="input__section">
          <ul className="output-ul">
            <li
              onClick={eventHandler}
              onKeyDown={eventHandler}
              id="clear"
              className="key"
            >
              AC
            </li>
            <li onClick={eventHandler} id="plus-minus" className="key">
              +/-
            </li>
            <li onClick={eventHandler} id="percent" className="key">
              %
            </li>
            <li onClick={eventHandler} id="divide" className="key action">
              ÷
            </li>
            <li onClick={eventHandler} className="key">
              7
            </li>
            <li onClick={eventHandler} className="key">
              8
            </li>
            <li onClick={eventHandler} className="key">
              9
            </li>
            <li onClick={eventHandler} id="times" className="key action">
              x
            </li>
            <li onClick={eventHandler} className="key">
              4
            </li>
            <li onClick={eventHandler} className="key">
              5
            </li>
            <li onClick={eventHandler} className="key">
              6
            </li>
            <li onClick={eventHandler} id="minus" className="key action">
              -
            </li>
            <li onClick={eventHandler} className="key">
              1
            </li>
            <li onClick={eventHandler} className="key">
              2
            </li>
            <li onClick={eventHandler} className="key">
              3
            </li>
            <li onClick={eventHandler} id="plus" className="key action">
              +
            </li>
            <li onClick={eventHandler} className="key zero">
              0
            </li>
            <li onClick={eventHandler} className="key decimal">
              .
            </li>
            <li onClick={eventHandler} id="equals" className="key action">
              =
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
