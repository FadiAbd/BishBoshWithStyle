document
  .getElementById('inputForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const loopLimit = parseInt(document.getElementById('loopLimit').value);
    const firstDividedNumber = parseInt(
      document.getElementById('firstDividedNumber').value
    );
    const secondDividedNumber = parseInt(
      document.getElementById('secondDividedNumber').value
    );

    document.getElementById('outputList').innerHTML = ''; // Clear previous results

    for (let i = 1; i <= loopLimit; i++) {
      if (i % firstDividedNumber === 0 && i % secondDividedNumber === 0) {
        document.getElementById('outputList').innerHTML += '<li>Bish-Bosh</li>';
      } else if (i % firstDividedNumber === 0) {
        document.getElementById('outputList').innerHTML += '<li>Bish</li>';
      } else if (i % secondDividedNumber === 0) {
        document.getElementById('outputList').innerHTML += '<li>Bosh</li>';
      } else {
        document.getElementById('outputList').innerHTML += `<li>${i}</li>`;
      }
    }
  });
