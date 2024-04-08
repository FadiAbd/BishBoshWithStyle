/

// Function to generate and display Bish Bosh sequence
function generateBishBosh(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user input values
  const loopLimit = parseInt(document.getElementById('loopLimit').value);
  const firstDividedNumber = parseInt(
    document.getElementById('firstDividedNumber').value
  );
  const secondDividedNumber = parseInt(
    document.getElementById('secondDividedNumber').value
  );

  // Clear existing content in the output textarea
  const outputTextarea = document.createElement('textarea');
  outputTextarea.classList.add('form-control');
  outputTextarea.setAttribute('rows', '10');
  outputTextarea.setAttribute('readonly', 'true');

  let outputText = '';

  // Generate Bish Bosh sequence based on user input
  for (let i = 1; i <= loopLimit; i++) {
    if (i % firstDividedNumber === 0 && i % secondDividedNumber === 0) {
      outputText += 'Bish-Bosh\n';
    } else if (i % firstDividedNumber === 0) {
      outputText += 'Bish\n';
    } else if (i % secondDividedNumber === 0) {
      outputText += 'Bosh\n';
    } else {
      outputText += i + '\n';
    }
  }

  // Set the generated Bish Bosh sequence as the value of the textarea
  outputTextarea.value = outputText;

  // Replace existing outputList with the outputTextarea
  const outputList = document.getElementById('outputList');
  outputList.innerHTML = ''; // Clear existing outputList
  outputList.appendChild(outputTextarea);
}

// Event listener for form submission
const inputForm = document.getElementById('inputForm');
inputForm.addEventListener('submit', generateBishBosh);
