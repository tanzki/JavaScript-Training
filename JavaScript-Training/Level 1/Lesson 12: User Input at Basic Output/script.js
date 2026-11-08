//Lesson 12 — User Input at Basic Output
console.log(`son 12 — User Input at Basic Output`);

console.log(``);

console.log(`Exercise 1 — Ask for a name`);
console.log(
  `Gumawa ng variable na userName at gamitin ang prompt() para itanong ang pangalan ng user. Ipakita ito gamit ang console.log().`,
);
const studentName = prompt('What is your username?');
console.log(`Name: ${studentName}`);
alert(`Hello, ${studentName}!`);

console.log(``);

console.log(`Exercise 2 — Add two numbers`);
console.log(
  `Gumamit ng dalawang prompt() para humingi ng dalawang numero. I-convert ang bawat input gamit ang Number() at ipakita ang sum.
  Kung ang inputs ay 10 at 5, dapat ang output ay:`,
);
const num1 = Number(prompt(`Number 1`));
const num2 = Number(prompt(`Number 2`));
const total = num1 + num2;
console.log(`Total: ${total}`);
alert(`Total: ${total}`);

console.log(``);

console.log(`Exercise 3 — Use alert()`);
console.log(
  `Humingi ng pangalan gamit ang prompt() at magpakita ng welcome message gamit ang alert().`,
);
const name2 = prompt(`What is your name?`);
console.log(`${name2}`);
alert(`Welcome to JavaScript, ${name2}!`);

console.log(``);

console.log(`Challenge — Student Information System`);
console.log(`Gumawa ng simpleng program na humihingi ng:
- Student name
- Age
- Math score
- English score
Requirements:
1. Gumamit ng prompt() para sa apat na inputs.
2. I-convert ang age at scores gamit ang Number().
3. Kalkulahin ang totalScore at averageScore.
4. Ipakita ang student report gamit ang console.log() at template literals.
5. Gumamit ng alert() para magpakita ng welcome message.
Halimbawa, kung ang inputs ay:
- Name: Tanzki
- Age: 20
- Math score: 85
- English score: 95`);
console.log(`=== Student Information System ===`);
const studentName3 = prompt('Student Name');
const age = Number(prompt('Age'));
const mathScore = Number(prompt('Math Score'));
const englishScore = Number(prompt('English Score'));
const totalScore = mathScore + englishScore;
const averageScore = totalScore / 2;
console.log(`=== Student Report ===
Name: ${studentName3}
Age: ${age}
Math Score: ${mathScore}
English Score: ${englishScore}
Total Score: ${totalScore}
Average Score: ${averageScore}`);
alert(`Welcome to JavaScript, ${studentName3}!`);

console.log(``);

console.log(`Quick quiz`);
console.log(`Bago ka magsumite ng exercises, sagutin din ang tatlong tanong na ito:
1. Ano ang pangunahing gamit ng prompt()?
2. Bakit kailangan ang Number() kapag nagdadagdag ng dalawang numeric inputs?
3. Ano ang pagkakaiba ng alert() at console.log()?`);

console.log(`Answer:
1. Ginagamit ang prompt() para magpakita ng dialog box na maaaring sulatan ng user
2. Dahil strings ang dalawang input, kaya pinagdugtong sila ng + sa halip na idagdag bilang numbers.
3. -Ang alert() ay nagpapakita ng dialog box sa browser.
   -Ang console.log() ay nagpapakita ng output sa browser console.
`);
