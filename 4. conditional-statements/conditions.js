// IF STATEMENTS = if a condition is true, execute some code.
// ELSE IF STATEMENTS = if the first condition is false, check the next condition.
// ELSE STATEMENTS = if the condition is false, do something else.


// ---------------- Check Your Eligibility to Drive ----------------


const userInput = document.getElementById("userInput");
const hasLicenseCheckbox = document.getElementById("hasLicense");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function showingOutput() {
  let ageInput = userInput.value.trim();    
  let ageValue = Number(ageInput);          
  let hasLicense = hasLicenseCheckbox.checked;

  if (ageInput === "" || isNaN(ageValue) || ageValue < 0) {
    showMessage("Please enter a valid age!", "red");
    userInput.value = "";
    userInput.focus();
    return;
  }

  if (hasLicense === false) {
    alert("You must have a Driving License to drive!");
    output.textContent = "";
    userInput.focus();
    return;
  }

  if (ageValue === 0) {
    showMessage("You can't drive. You were just born!", "red");
  } 
  else if (ageValue >= 100) {
    showMessage("You are TOO OLD to drive!", "red");
  } 
  else if (ageValue >= 70 && ageValue < 100) {
    showMessage("You're old, so drive carefully!", "orange");
  } 
  else if (ageValue >= 18 && ageValue < 70) {
    showMessage("You are an adult, so you can drive!", "green");
  } 
  else {
    showMessage("You must be 18+ to drive!", "red");
  }

  resetInputs();
};

// Helper to show output with animation
function showMessage(message, color) {
  output.style.color = color;

  // --- Reset and force re-render ---
  output.classList.remove("show");
  output.textContent = "";          // remove old text
  void output.offsetWidth;          // force re-flow
  output.textContent = message;     // re-add text
  output.classList.add("show");     // trigger animation again
}

function resetInputs() {
  userInput.value = "";
  hasLicenseCheckbox.checked = false;
  userInput.focus();
}
