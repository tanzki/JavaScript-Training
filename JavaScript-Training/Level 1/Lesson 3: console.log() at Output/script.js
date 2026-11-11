// Lesson 3: console.log() at Output
console.log(`Lesson 3: console.log() at Output`);

console.log('');

console.log(`Exercise 1:`);

let developerName = "Tanzki";
let developerAge = 35;
let developerCareer = "Full Stack Developer";

document.getElementById("name").textContent = "Name: " + developerName;
document.getElementById("age").textContent = "Age: " + developerAge;
document.getElementById("career").textContent =
"Career: " + developerCareer;

console.table([
{
    name: "Tanzki",
    age: 35,
    career: "Full Stack Developer",
},
{
    name: "Alex",
    age: 28,
    career: "Web Developer",
},
{
    name: "Tin",
    age: 30,
    career: "Software Developer",
},
]);

console.log(`Exercise 2:`);
// 2 normal messages
console.log("Console Log Message 1");
console.log("Console Log Message 2");

// 2 warning messages
console.warn("console.warn Message 1");
console.warn("console.warn Message 2");

// 2 error messages
console.error("console.error Message 1");
console.error("console.error Message 2");

// 1 info message
console.info("console.info Message 1");

console.log(``);

console.log(`Exercise 3:`);
    const developerName = "Tanzki";
    const developerAge = 20;
    const developerCountry = "Philippines";
    const developerSkill = "Beginner";
    const developerCareer = "Full-Stack Web Developer";

    document.getElementById("developerName").textContent = developerName;
    document.getElementById("developerAge").textContent = developerAge;
    document.getElementById("developerCountry").textContent = developerCountry;
    document.getElementById("developerSkill").textContent = developerSkill;
    document.getElementById("developerCareer").textContent = developerCareer;

    console.log("Name: " + developerName);
    console.log("Age: " + developerAge);
    console.log("Country: " + developerCountry);
    console.log("Skill Level: " + developerSkill);
    console.log("Dream Career: " + developerCareer);

    console.info("Info 1: Matagumpay na na-load ang Developer Information Dashboard.");
    console.info("Info 2: Ang impormasyon ay ipinapakita sa HTML page at sa Console.");

    console.warn("Warning: Ito ay sample warning message lang.");

    console.error("Error: Ito ay sample error message lang para sa practice.");

    console.table({
    Name: developerName,
    Age: developerAge,
    Country: developerCountry,
    "Skill Level": developerSkill,
    "Dream Career": developerCareer
    });

    document.getElementById("infoButton").addEventListener("click", function () {
    alert("Ang pangalan ko ay " + developerName + "!");
    console.log("Confirmation: Na-click ang Show My Information button.");
    });
