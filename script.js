let calculation = ''; // Holds the sum/result

console.log('hej');

function addToCalculation(number) {
  calculation += number;
  updateResult(calculation);
}

function addOperator(operator) {
  if (calculation && !isNaN(calculation.slice(-1))) {
    calculation += operator; // Append operator only if the last character is a number
    updateResult(calculation); // Update result display
  }
}

function updateResult(value) {
  document.querySelector('.result').textContent = value; // Update result div
}

function calculateResult() {
  try {
    const result = eval(calculation); // Evaluate the calculation string
    updateResult(result);
    calculation = result.toString(); // Store the result for further calculations
  } catch (error) {
    updateResult('Error'); // Handle invalid expressions
    calculation = ''; // Reset calculation on error
  }
}
