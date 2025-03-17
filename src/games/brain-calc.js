#!/usr/bin/env node
import index from '../index.js';

const rules = 'What is the result of the expression?';
export default () => {
  const prepareData = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const mathOperators = ['+', '-', '*'];
    const randIndex = Math.floor(Math.random() * mathOperators.length);
    const operator = mathOperators[randIndex];
    const question = `${num1} ${operator} ${num2}`;

    let correctAnswer = 0;
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
    }
    correctAnswer = correctAnswer.toString();
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
