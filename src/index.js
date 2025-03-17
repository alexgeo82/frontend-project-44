#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (rules, prepareData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let counter = 0;
  while (counter < 3) {
    const data = prepareData();
    const question = data[0];
    const correctAnswer = data[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      break;
    }

    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
