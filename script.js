let calculation = ''; // Holds the sum/result

console.log('hej');

function addToCalculation(number) {
    calculation += number;
    updateResult(calculation);
}

function updateResult(value){
    document.querySelector('.result').textContent = value; // Update result div
}