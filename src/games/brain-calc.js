#!/usr/bin/env node
import index from '../index.js';

const rules = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
const calculator = (num1, num2, operator) => {
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

export default () => {
  const prepareData = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const mathOperators = ['+', '-', '*'];
    const randIndex = Math.floor(Math.random() * mathOperators.length);
    const operator = mathOperators[randIndex];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculator(num1, num2, operator).toString();
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
