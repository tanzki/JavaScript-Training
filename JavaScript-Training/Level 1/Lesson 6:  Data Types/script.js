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