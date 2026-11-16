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

document.getElementById("testButton").addEventListener("click", function () {
    alert("Test Button Clicked!");
    console.log("Connection Successful.");
});

document.getElementById("eventButton").addEventListener("click", function () {
    alert("Event Button Clicked!");
    console.log("Event Function Successful.");
});


// Select all Copy Buttons
const copyButtons = document.querySelectorAll(".copy-btn");
// Add a click event listener to each button
copyButtons.forEach(button => {
    button.addEventListener("click", async function () {
        // Get the text from the previous PRE element
        const code = this.previousElementSibling.textContent;
        try {
            // Copy the code to the clipboard
            await navigator.clipboard.writeText(code);
            // Change the button label
            this.textContent = "Copied!";
            // Restore the original button label after 2 seconds
            setTimeout(() => {
                this.textContent = "Copy";
            }, 2000);
        } catch (error) {
            // Display an error message if copying fails
            this.textContent = "Failed!";
        }
    });
});