// --------------------------- The Code of the Dice (Number Generator) is on the Line '80' to Onwards ------------------------------


// Generating random numbers and creating a Dice through them :

// ---------------------- First we are generating a random number : ------------------------

// let randomNum = Math.random()
// console.log(randomNum)

// --------------------------------

// Since, these random numbers are Decimal Numbers between '0' and '1'.
// Now, we make them Whole Numbers by using "Math.round()" method and multiplying these numbers by '6' :

// let randomNum = Math.round(Math.random() * 6)
// console.log(randomNum)

// ---------------------------------

// Now, they are Whole Numbers but they are starting from '0' and ends on '6'.
// so, we added '1' to prevent '0' :

// let randomNum = Math.round(Math.random() * 6) + 1;
// console.log(randomNum);

// ---------------------------------

// --------------------- Most Authentic Way : -----------------------

// Now, we are getting a number between '1' and '6'

// Now, the problem of '0' is solved but there is another problem , the number '7' is included :
// So, we have to fix this issue by using "Math.floor()" method instead of "Math.round()" method :

// let randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);

// ------------------------------------

// We can also use "Math.ceil()" method to perform the same task, but in a very rare case ,
// there will be number '0' . So we have to use "Math.floor()" method instead of "Math.ceil()" method :

// let randomNum = Math.ceil(Math.random() * 6) ;
// console.log(randomNum);

// ---------------------------------------------------------------------------------------------------

// Generating Numbers between '1' and '100' :

// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);

// -----------------------------------

// Generating Random Number between a Certain Range :

// const minimum = 50;
// const maximum = 100;

// let randomNum = Math.floor(Math.random() * (maximum - minimum)) + minimum;
// console.log(randomNum)                    // (  100   -   50   )  +   50 ;

// Here, '100' is not included in the final Outputs, So if we want to include '100' , add (+ 1)

// const minimum = 50;
// const maximum = 100;

// let randomNum = Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
// console.log(randomNum);

// Now, '100' is included in the final Outputs.



// --------------------------------------------------------------------------------------------



// ------------------------------ Creating a Dice : ----------------------------------

// const myButton = document.getElementById("rollBtn");
// const numberBtn = document.getElementById("numBtn");

// const min = 1;
// const max = 6;

// let randomNumber;

// myButton.onclick = function showNumber() {
// //   let randomNumber;              Local Scope Variable / creates a new variable on every click
//   randomNumber = Math.floor(Math.random() * max) + min;
//   numberBtn.textContent = randomNumber;
//     console.log(randomNumber);
// };


// ------------------------ If we want to roll down three Dices in a Single Click : -------------------------


const myButton = document.getElementById("rollBtn");
const numberBtn_1 = document.getElementById("numBtn-1");
const numberBtn_2 = document.getElementById("numBtn-2");
const numberBtn_3 = document.getElementById("numBtn-3");

const min = 1;
const max = 6;

let randomNumber_1;
let randomNumber_2;
let randomNumber_3;

myButton.onclick = function showNumber() {
  randomNumber_1 = Math.floor(Math.random() * max) + min;
  randomNumber_2 = Math.floor(Math.random() * max) + min;
  randomNumber_3 = Math.floor(Math.random() * max) + min;
  numberBtn_1.textContent = randomNumber_1;
  numberBtn_2.textContent = randomNumber_2;
  numberBtn_3.textContent = randomNumber_3;
  // console.log(randomNumber_1);
  // console.log(randomNumber_2);
  // console.log(randomNumber_3);
}


// ------------------------------------------------------------------------------------------------


// ------------------------- If we want to change the color of the 2nd Button , On clicking the 1st Button ... -------------------

// 1. This will change the color only 1 time :

// myButton.onclick = function changingColor() {
//   numberBtn.style.backgroundColor = "#ff5e00"; // changes color on click
//   numberBtn.style.color = "white";
// };

// This Function is changing color of the 2nd Button , when we click on the first button :

// myButton.onclick = function changingColor() {
//   if (numberBtn.style.backgroundColor === "rgb(255, 94, 0)") {
//     numberBtn.style.backgroundColor = "white";
//   } 
//   else {
//     numberBtn.style.backgroundColor = "rgb(255, 94, 0)";
//   }
// };


// ---------------------------------------------------------------------------------------------------


