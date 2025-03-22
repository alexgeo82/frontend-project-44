#!/usr/bin/env node
import index from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const prepareData = () => {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  index(rules, prepareData);
};
