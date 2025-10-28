// // .checked = It is a property that determines the checked state of an HTML checkbox or radio button element.

const checkBox = document.getElementById("checkBox");
const checkBoxDiv = document.getElementById("checkBoxDiv");
const checkBoxLabel = document.getElementById("checkBoxLabel");

const visaDiv = document.getElementById("visaDiv");
const visaInput = document.getElementById("visaInput");
const visaLabel = document.getElementById("visaLabel");

const masterCardDiv = document.getElementById("masterCardDiv");
const masterCardInput = document.getElementById("masterCardInput");
const masterCardLabel = document.getElementById("masterCardLabel");

const payPalDiv = document.getElementById("payPalDiv");
const payPalInput = document.getElementById("payPalInput");
const payPalLabel = document.getElementById("payPalLabel");

const submitBtn = document.getElementById("submitBtn");
const subscribeOutput = document.getElementById("subscribeOutput");
const paymentOutput = document.getElementById("paymentOutput");


// --------------------------------------------------------------------------------------------------------


// ---------- (1) Checkbox Toggle Logic ----------


// 1.
// checkBoxOption.onclick = function () {
//   checkBox.checked = !checkBox.checked;
// };

// // "OR"

// 1.
checkBoxDiv.onclick = function Check_Box_Selector_And_Deselector_1(){

    if(checkBox.checked === true){
        // checkBoxDiv.style.border = "2px solid rgb(255, 255, 255)";
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
        // checkBoxDiv.style.border = none;
    }
};
//2.
checkBox.onclick = function Check_Box_Selector_And_Deselector_2(){

    if(checkBox.checked === true){
        // checkBoxDiv.style.border = "2px solid rgb(255, 255, 255)";
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
        // checkBoxDiv.style.border = none;
    }
};
//3.
checkBoxLabel.onclick = function Check_Box_Selector_And_Deselector_3(){

    if(checkBox.checked === true){
        // checkBoxDiv.style.border = "2px solid rgb(255, 255, 255)";
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
        // checkBoxDiv.style.border = none;
    }
};

// ----------- Applying Border To CheckBox Div -----------

checkBox.addEventListener("change", function Style() {
  if (checkBox.checked) {
    checkBoxDiv.style.border = "2px solid rgb(255, 255, 255)";
  } 
  else {
    checkBoxDiv.style.border = "none";
  }
});

// ---------- (2) Radio Buttons Toggle Logic ----------

// 1.
// visaDiv.onclick = function Radio_Button_Selector_And_Deselector_1 () {

//   if (visa.checked == true) {
//     visa.checked = false;
//   } else {
//     visa.checked = true;
//   }
// };
// // 2.
// visa.onclick = function Radio_Button_Selector_And_Deselector_2 (){

//     if(visa.checked == true){
//         visa.checked = false;
//     }
//     else {
//         visa.checked = true;
//     }
// };
// // 3.
// visaLabel.onclick = function Radio_Button_Selector_And_Deselector_3 () {

//   if (visa.checked == true) {
//     visa.checked = false;
//   } else {
//     visa.checked = true;
//   }
// };
// // 1.
// masterCardDiv.onclick = function Radio_Button_Selector_And_Deselector_4 () {

//   if (masterCard.checked === true) {
//     masterCard.checked = false;
//   } else {
//     masterCard.checked = true;
//   }
// };
// // 2.
// masterCard.onclick = function Radio_Button_Selector_And_Deselector_5 () {

//   if (masterCard.checked === true) {
//     masterCard.checked = false;
//   } else {
//     masterCard.checked = true;
//   }
// };
// // 3.
// masterCardLabel.onclick = function Radio_Button_Selector_And_Deselector_6 () {

//   if (masterCard.checked === true) {
//     masterCard.checked = false;
//   } else {
//     masterCard.checked = true;
//   }
// };
// // 1.
// payPalDiv.onclick = function Radio_Button_Selector_And_Deselector_7 () {

//   if (payPal.checked === true) {
//     payPal.checked = false;
//   } else {
//     payPal.checked = true;
//   }
// };
// // 2.
// payPal.onclick = function Radio_Button_Selector_And_Deselector_8 () {

//   if (payPal.checked === true) {
//     payPal.checked = false;
//   } else {
//     payPal.checked = true;
//   }
// };
// // 3.
// payPalLabel.onclick = function Radio_Button_Selector_And_Deselector_9 () {

//   if (payPal.checked === true) {
//     payPal.checked = false;
//   } else {
//     payPal.checked = true;
//   }
// };

// const allOptions = document.querySelectorAll(".radioBtns");

// allOptions.forEach((radioBtns) => {
//   radioBtns.addEventListener("click", function (event) {
//     event.preventDefault(); 
//     const input = this.querySelector("input");
//     event.preventDefault(); 
//     input.checked = !input.checked; 
//   });
// });



// // ---------- (2) Radio Buttons Toggle Logic ----------

// // let lastChecked = null;

// // // Select and Run Function on all Radio Buttons :

// // document.querySelectorAll('input[name="payment"]').forEach(function (radio) {
// //   const parentDiv = radio.closest(".option");           // radio is present inside 'option' div

// //   parentDiv.addEventListener("click", function () {
// //     if (lastChecked === radio) {
// //       // If user clicked on the same radio again, uncheck it :
// //       radio.checked = false;
// //       lastChecked = null;
// //     } 
// //     else {
// //       // If user clicked on a different radio, check it :
// //       radio.checked = true;
// //       lastChecked = radio;
// //     }
// //   });
// // });

// const allOptions = document.querySelectorAll(".radioBtns");

// allOptions.forEach((radioBtns) => {
//   radioBtns.addEventListener("click", function () {
//     // Uncheck sab
//     document.querySelectorAll(".radioBtns input").forEach((input) => {
//       input.checked = false;
//     });

//     // Current select karo
//     const input = this.querySelector("input");
//     input.checked = true;
//   });
// });


// Select all radio container divs


const allRadioBtns = document.querySelectorAll(".radioBtns");
let lastChecked = null;

allRadioBtns.forEach((radioBtns) => {
  radioBtns.addEventListener("click", function () {
    const input = this.querySelector("input");

    // sab se '.selected' class hatao
    allRadioBtns.forEach((opt) => opt.classList.remove("selected"));

    if (lastChecked === input) {
      input.checked = false;
      lastChecked = null;
    } else {
      document.querySelectorAll(".radioBtns input").forEach((inp) => (inp.checked = false));
      input.checked = true;
      lastChecked = input;
      this.classList.add("selected");   // highlight selected div
    }
  });
});

submitBtn.onclick = function showOutput() {

    if (checkBox.checked) {
        subscribeOutput.textContent = `Welcome! You are our Subscriber!`;
        subscribeOutput.style.color = "#33ff00";
        subscribeOutput.style.fontSize = "20px";
        subscribeOutput.style.fontWeight = "bold";
        subscribeOutput.style.fontFamily = "Segoe UI", "Tahoma", "Verdana", "sans-serif";


        if (checkBox.checked && (visaInput.checked || masterCardInput.checked || payPalInput.checked)) {


            if (checkBox.checked && visaInput.checked ) {
                paymentOutput.textContent = `You are paying us through "Visa"`;
                paymentOutput.style.color = "yellow";
                paymentOutput.style.fontSize = "20px";
                // paymentOutput.style.fontWeight = "bold";
                paymentOutput.style.fontFamily = "Segoe UI","Tahoma","Verdana","sans-serif";
            } 
            else if (checkBox.checked && masterCardInput.checked) {
                paymentOutput.textContent = `You are paying us through "Master Card"`;
                paymentOutput.style.color = "yellow";
                paymentOutput.style.fontSize = "20px";
                // paymentOutput.style.fontWeight = "bold";
                paymentOutput.style.fontFamily = "Segoe UI","Tahoma","Verdana","sans-serif";
                } 
            else if (checkBox.checked && payPalInput.checked) {
                paymentOutput.textContent = `You are paying us through "PayPal"`;
                paymentOutput.style.color = "yellow";
                paymentOutput.style.fontSize = "20px";
                // paymentOutput.style.fontWeight = "bold";
                paymentOutput.style.fontFamily = "Segoe UI", "Tahoma", "Verdana", "sans-serif";
                }
            }
            else {
                paymentOutput.textContent = `Please select a payment method!`;
                paymentOutput.style.color = "orange";
                paymentOutput.style.fontSize = "20px";
                paymentOutput.style.fontWeight = "bold";
                paymentOutput.style.fontFamily = "Segoe UI", "Tahoma", "Verdana", "sans-serif";
        }
    }

        else if (
            checkBox.checked === false && (visaInput.checked || masterCardInput.checked || payPalInput.checked)) {
            subscribeOutput.textContent = `You DID NOT Subscribed our Plan!`;
            subscribeOutput.style.color = "red";
            subscribeOutput.style.fontSize = "20px";
            subscribeOutput.style.fontWeight = "bold";
            subscribeOutput.style.fontFamily = "Segoe UI","Tahoma","Verdana","sans-serif";
            paymentOutput.textContent = `Please Subscribe our plan first!`;
            paymentOutput.style.fontSize = "20px";
            paymentOutput.style.fontWeight = "bold";
            paymentOutput.style.color = "orange";
        } 

    else if (checkBox.checked === false) {
        subscribeOutput.textContent = `You DID NOT Subscribed our Plan!`;
        subscribeOutput.style.color = "red";
        subscribeOutput.style.fontSize = "20px";
        subscribeOutput.style.fontWeight = "bold";
        subscribeOutput.style.fontFamily = "Segoe UI","Tahoma","Verdana","sans-serif";
        paymentOutput.textContent = `Subscribe our plan first!`;
        paymentOutput.style.fontSize = "20px";
        paymentOutput.style.fontWeight = "bold";
        paymentOutput.style.color = "orange";
        }

};

// ----------------- Reloading/Refreshing the page after a specific time : -------------------

                            // ---------- Method 1 : -----------

// Reloads after every 10 seconds :

// setInterval(function refresh() {
//   location.reload()
//     }, 10000);

// refresh();       // Throws Error : Because of Function Scope 


                             // ---------- Method 2 : -----------

// Reloads after 5 seconds (5000 milliseconds) :

// setTimeout(function refresh() {
//   location.reload();
// }, 5000);
