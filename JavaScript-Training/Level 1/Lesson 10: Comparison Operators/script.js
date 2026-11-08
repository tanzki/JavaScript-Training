// Lesson 10: Comparison Operators
console.log('Lesson 10: Comparison Operators sa JavaScript');

console.log('');

console.log('Exercise 1 — Number comparisons');
const a = 25;
const b = 15;

console.log(a > b);
console.log(a < b);
console.log(a >= 25);
console.log(b <= 10);

console.log('');

console.log('Exercise 2 — Equality comparisons');
console.log(100 == '100');
console.log(100 === '100');
console.log(50 !== '50');
console.log(50 !== 50);

console.log('');

console.log('Challenge — Student Passing Score Checker');
console.log(`Gumawa ng program na may sumusunod na requirements:
- Gumamit ng const studentName = 'Tanzki';
- Gumamit ng const studentScore = 85;
- Gumamit ng const passingScore = 75;
- I-print ang pangalan at score ng student.
- I-print ang resulta ng studentScore >= passingScore.
- I-print ang resulta ng studentScore === passingScore.
- Gumamit ng template literals para sa report.`);
const studentName5 = 'Tanzki';
const studentScore = 85;
const passingScore = 75;
const passed = studentScore >= passingScore;
const exactPassingScore = studentScore === passingScore;
console.log('=== Student Score Comparison ===');
console.log(`Student: ${studentName5}`);
console.log(`Score: ${studentScore}`);
console.log(`Passing Score: ${passingScore}`);
console.log(`Passed: ${passed}`);
console.log(`Exact Passing Score: ${exactPassingScore}`);
