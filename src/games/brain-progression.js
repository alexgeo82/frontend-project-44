#!/usr/bin/env node
import index from '../index.js';

const rules = 'What number is missing in the progression?';
export default () => {
  const generateProgression = (length, step, firstNum) => {
    const progression = [firstNum];
    let temp = firstNum;
    for (let i = 0; i < length - 1; i += 1) {
      temp += step;
      progression.push(temp);
    }
    return progression;
  };

  const prepareData = () => {
    const length = 10;
    const step = Math.floor(Math.random() * 5) + 1;
    const firstNum = Math.floor(Math.random() * 100);
    const hiddenNumIndex = Math.floor(Math.random() * 9);

    const progression = generateProgression(length, step, firstNum);
    const correctAnswer = progression[hiddenNumIndex].toString();
    progression[hiddenNumIndex] = '..';
    const question = progression.join(' ');

    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
