// IF STATEMENTS = if a condition is true, execute some code.
// ELSE IF STATEMENTS = if the first condition is false, check the next condition.
// ELSE STATEMENTS = if the condition is false, do something else.


// ---------------- Creating a Program to Check Your Eligibility to Drive ----------------


const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitBtn");
const output = document.getElementById("output");

let age;

submitBtn.onclick = function showingOutput() {

  age = userInput.value;
  age = Number(age);

  if (age >= 100) {

    output.textContent = `You are TOO OLD to Drive!`;
    // alert(`You are TOO OLD to enter this site`);

  } 

  else if (age >= 70 && age < 100) {
  
    output.textContent = `You are an OLD person , So you must be Drive carefully!.`;

  }

  else if (age == 0) {
  
    output.textContent = `You can't Drive!!! You were just born!!!`;

  } 

  else if (age >= 18 && age < 70) {
  
    output.textContent = `You are an adult , So you can Drive!.`;

  }

  else if (age < 0) {

    output.textContent = `Your age can't be below 0`;

  } 

  else {

    output.textContent = `You must be 18+ to Drive!`;

  }

};
