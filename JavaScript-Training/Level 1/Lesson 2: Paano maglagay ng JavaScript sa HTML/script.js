document.getElementById("clickMe").addEventListener("click", function () {
    alert("Button Clicked!");
    console.log("First message:");
    console.log("Second message:");
    console.log("Third message:");
});

console.log("Message 1: Nakakonekta na ang app.js.");
console.log("Message 2: Gumagana ang defer.");
console.log("Message 3: Na-load na ang buong HTML bago tumakbo ang script.");
console.log("Message 4: Handa nang tumanggap ng click events.");
console.log("Message 5: Matagumpay ang JavaScript connection test!");

document.getElementById("testButton").addEventListener("click", function() {
    alert("Test Button Clicked!");
    console.log("Connection Successful.");
});

document.getElementById("eventButton").addEventListener("click", function() {
    alert("Event Button Clicked!");
    console.log("Event Function Successful.");
});