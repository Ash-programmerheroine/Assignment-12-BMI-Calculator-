const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weightInput').value);
  const height = parseFloat(document.getElementById('heightInput').value) / 100; // convert cm to m
  const bmi = weight / (height * height);

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});
