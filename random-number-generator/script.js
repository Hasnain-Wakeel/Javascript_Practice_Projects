// ----- Generating a Random Number by clicking the 1st Button and Showing the Number on the 2nd Button : -----

// We can create the variable randomNum globally (outside the function) as well as locally (inside the function). 


// let randomNum;               // Global Variable (Global Scope Variable)

document.getElementById("randomNumBtn").onclick = function randomNumber() {
  let min = 1;
  let max = 100;
  // let randomNum;                // Local Scope or Function Scope Variable
  let randomNum = Math.floor(Math.random() * max - min + min);
  document.getElementById("randomNumOutput").textContent = randomNum;
  console.log(randomNum);
};
