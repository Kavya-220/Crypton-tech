import React, { useState } from 'react';
import './Calculator.css'

const SimpleCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  // Function to handle calculation
  const calculate = () => {
    let calculatedResult;
    let operationText = '';

    switch (operation) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        operationText = `${num1} plus ${num2} is ${calculatedResult}`;
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        operationText = `${num1} minus ${num2} is ${calculatedResult}`;
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        operationText = `${num1} multiplied by ${num2} is ${calculatedResult}`;
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        operationText = `${num1} divided by ${num2} is ${calculatedResult}`;
        break;
      default:
        return;
    }
    setResult(operationText);
  };

  return (
   <>
  <div className="container">
  <fieldset>
  <legend className='title'>Simple Calculator </legend>
  <div className="operand">
  <label htmlFor="">Operand 1: </label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number 1"
      />
      </div>
      <div className="operators">
      <label htmlFor="">Operators: </label>
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}>
        <option value="">Select Operation</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      </div>
      <div className="operand">
  <label htmlFor="">Operand 2: </label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter number 2"
      />
      </div>
      <div className="calculate-btn">
      <button onClick={calculate}>Calculate</button>
      </div>
      <p className='result'>Result is <span>{result}</span></p>
      </fieldset>
    </div>
    </>
  );
};

export default SimpleCalculator;
