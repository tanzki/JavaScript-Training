// Lesson 14 — Nested if Statements
console.log(`Lesson 14 — else at else if`);

console.log(``);

console.log(`Exercise 1 — Age Classification`);
let age = 19

if (age >= 60) {
  console.log('Senior Citizen');
} else if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

console.log(``);

console.log(`Exercise 2 — Grade Classification`);
let grade = 74;

if (grade >= 95) {
  console.log('Outstanding');
} else if (grade >= 90) {
  console.log('Excellent');
} else if (grade >= 85) {
  console.log('Very Good');
} else if (grade >= 80) {
  console.log('Good');
} else if (grade >= 75) {
  console.log('Passed');
} else {
  console.log('Failed');
}

console.log(``);

console.log(`Exercise 3 — Login System`);
let userName = 'admin';
let password = 'admin123';

if (userName == 'admin' && password == 'admin123') {
  console.log('Login Successful!');
} else {
  console.log('Invalid Login Credentials');
}

console.log(``);

console.log(`Final Coding Challenge`);
let studentName = 'tanzki';
let age2 = 25;
let grade2 = 92;
let attendance = 95;

console.log('================================');
console.log('       STUDENT REPORT');
console.log('================================');


// Display Student Information
console.log('Student Name: ' + studentName);
console.log('Age: ' + age2);
console.log('Grade: ' + grade2);
console.log('Attendance: ' + attendance + '%');

console.log('');

// Grade Classification
if (grade2 >= 95) {
  console.log('Grade Classification: Outstanding');
} else if (grade2 >= 90) {
  console.log('Grade Classification: Excellent');
}else if (grade2 >= 85) {
  console.log('Grade Classification: Very Good');
}else if (grade2 >= 80) {
  console.log('Grade Classification: Good');
}else if (grade2 >= 75) {
  console.log('Grade Classification: Passed');
}else {
  console.log('Grade Classification: Failed');
}
console.log('');

// Registration Eligibility
if (age2 >= 18 && grade2 >= 75 && attendance >= 80) {
    console.log('Registration Status: Eligible');
} else {
    console.log('Registration Status: Not Eligible');

    // Display reasons
    if (age2 < 18) {
        console.log('Reason: Age must be 18 or above.');
    }

    if (grade2 < 75) {
        console.log('Reason: Grade must be 75 or above.');
    }

    if (attendance < 80) {
        console.log('Reason: Attendance must be 80% or above.');
    }
}

console.log(``);