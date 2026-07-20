function executeAverage() {
  let average = getAverage();
  let output = document.getElementById("average");
  output.value = average;
}

function getAverage() {
  let count = 0;
  let total = 0;

  let sagree = +document.getElementById("sagree").value;
  count += sagree;
  total += 5 * sagree;

  let agree = +document.getElementById("agree").value;
  count += agree;
  total += 4 * agree;

  let neutral = +document.getElementById("neutral").value;
  count += neutral;
  total += 3 * neutral;

  let disagree = +document.getElementById("disagree").value;
  count += disagree;
  total += 2 * disagree;

  let sdisagree = +document.getElementById("sdisagree").value;
  count += sdisagree;
  total += 1 * sdisagree;

  if (count == 0) {
    return ""
  }

  return (total / count).toFixed(2);
}

function clearInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(
    p => p.value = 0
  )
  document.getElementById("average").value = ""
}
