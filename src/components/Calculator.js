/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="output__section">
          <input type="text" className="output" placeholder="0" readOnly />
        </div>
        <div className="input__section">
          <ul className="output-ul">
            <li id="clear" className="key">
              AC
            </li>
            <li id="plus-minus" className="key">
              &#177;
            </li>
            <li id="percent" className="key">
              &#37;
            </li>
            <li id="divide" className="key action">
              &#247;
            </li>
            <li className="key">7</li>
            <li className="key">8</li>
            <li className="key">9</li>
            <li id="times" className="key action">
              &#215;
            </li>
            <li className="key">4</li>
            <li className="key">5</li>
            <li className="key">6</li>
            <li id="minus" className="key action">
              &#8722;
            </li>
            <li className="key">1</li>
            <li className="key">2</li>
            <li className="key">3</li>
            <li id="plus" className="key action">
              &#x2b;
            </li>
            <li className="zero">0</li>
            <li className="decimal">&#8901;</li>
            <li id="equals" className="key action">
              &#61;
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Calculator;
