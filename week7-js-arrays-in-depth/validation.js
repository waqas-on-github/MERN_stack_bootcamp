let index;  // Declare the variable "index"

// Get the user input
let userInput = prompt("Enter a number:");

// Convert the user input to a number
index = Number(userInput);

// Check if the user input is a valid integer
if (!Number.isInteger(index) || index < 0) {
  // Handle invalid input

  console.log("Invalid input. Please enter a non-negative integer.");
} else {
  // The input is valid. You can use the "index" variable here.
  console.log("The input is a valid non-negative integer: " + index);
}
