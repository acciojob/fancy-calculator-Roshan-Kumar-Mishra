//your JS code here. If required.
// Take input for the first variable and multiply it by 2
const firstInput = prompt("Enter the first variable:");
const multipliedResult = parseFloat(firstInput) * 2;

// Take input for the second variable
const secondInput = prompt("Enter the second variable:");

// Add the second input to the result of the first input multiplied by 2
const finalResult = multipliedResult + parseFloat(secondInput);

// Display the final result using alert()
alert("The final result is: " + finalResult);
