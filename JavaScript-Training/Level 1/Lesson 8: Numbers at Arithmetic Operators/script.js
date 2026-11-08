// Lesson 8 — Numbers at Arithmetic Operators
console.log('Lesson 8 — Numbers at Arithmetic Operators');

console.log('');

console.log('Exercise 1 — Basic arithmetic');
console.log(`Gumawa ng dalawang variables:`);
const num1 = 24;
const num2 = 6;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log('');

console.log('Exercise 2 — Remainder at exponentiation');
console.log(`Gamitin ang code na ito:`);
const x = 17;
const y = 5;
console.log(x % y);
console.log(x ** 2);
console.log(y ** 3);

console.log('');

console.log('Exercise 3 — Increment at decrement');
console.log('Ayusin at patakbuhin ang code:');
let score = 50;
console.log(score);
score++;
console.log(score);
score--;
console.log(score);

console.log('');

console.log('Challenge — Student Score Calculator');
console.log(`Gumawa ng program na may ganitong requirements:
- Gumamit ng const para sa studentName.
- Gumamit ng let para sa mathScore, englishScore, at scienceScore.
- Kalkulahin ang total score gamit ang addition.
- Kalkulahin ang average score gamit ang division.
- Ipakita ang student name, bawat score, total score, at average score gamit ang template literals.`);
const studentName4 = 'Tanzki';
let mathScore = 85;
let englishScore = 90;
let scienceScore = 95;
const totalScore = mathScore + englishScore + scienceScore;
const averageScore = totalScore / 3;
console.log(`=== Student Score Report ===`);
console.log(`Student: ${studentName4}`);
console.log(`Math: ${mathScore}`);
console.log(`English: ${englishScore}`);
console.log(`Science: ${scienceScore}`);
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
