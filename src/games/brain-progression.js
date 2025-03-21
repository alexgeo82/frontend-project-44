#!/usr/bin/env node
import index from '../index.js';

const rules = 'What number is missing in the progression?';
export default () => {
  const prepareData = () => {
    const length = 10;
    const step = Math.floor(Math.random() * 5) + 1;
    const firstNum = Math.floor(Math.random() * 100);
    const hiddenNumIndex = Math.floor(Math.random() * 9);
    const progression = [firstNum];
    let correctAnswer = 0;

    let temp = firstNum;
    for (let i = 0; i < length - 1; i += 1) {
      if (i === hiddenNumIndex) {
        progression.push('..');
        temp += step;
        correctAnswer = temp.toString();
      } else {
        temp += step;
        progression.push(temp);
      }
    }
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
