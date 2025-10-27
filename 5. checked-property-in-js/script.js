// // .checked = It is a property that determines the checked state of an HTML checkbox or radio button element.

// const checkBox = document.getElementById("checkBox");                // Done at line no 105
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");

const submitBtn = document.getElementById("submitBtn");

const subscribeOutput = document.getElementById("subscribeOutput");
const paymentOutput = document.getElementById("paymentOutput");
 
// ---------- Checkbox toggle on div click : ----------

// document.getElementById("checkBoxOption").addEventListener("click", function (event){
//   const checkBox = document.getElementById("checkBox");
//     if (event.target !== checkBox) 
//     checkBox.checked = !checkBox.checked;
// });

// // ---------- Radio buttons: select / deselect logic : ----------

// let lastChecked = null;

// document.querySelectorAll(".option input[type='radio']").forEach(function (input){
//   input.addEventListener("click", function(event) {
//     if (lastChecked === input) {
//       event.preventDefault();
//       input.checked = false;
//       lastChecked = null;
//     } else {
//       lastChecked = input;
//     }
//   });
// });

// -------------------------------------------------------

// checkBoxOption.addEventListener("click", function (event) {
//   // If user clicked on the input or the label, do nothing (Browser will handle itself.) :
//   if (event.target === checkBox || event.target.tagName === "LABEL") return; // returns/do nothing.
//   // Toggling the checkbox :
//   checkBox.checked = !checkBox.checked; // if checked, then unchecked, and vice versa.
// });

// let lastChecked = null;

// document.querySelectorAll(".option").forEach(function (option) {
//   const input = option.querySelector('input[type="radio"]');

//   option.addEventListener("click", function (event) {
//     // If user clicked on the input or the label, do nothing (Browser will handle itself.) :
//     if (event.target === input || event.target.tagName === "LABEL") return;

//     // Now, running the Normal Logic :
//     if (lastChecked === input) {
//       input.checked = false;
//       lastChecked = null;
//     } else {
//       input.checked = true;
//       lastChecked = input;
//     }
//   });
// });

// -----------------------------------------------------------

// let lastChecked = null;

// document.querySelectorAll(".option").forEach(function (option) {
//   const input = option.querySelector('input[type="radio"]');

//   option.addEventListener("click", function (event) {
//     // agar click directly radio par hua hai
//     // to browser ko handle karne do (kuch mat roko)
//     if (event.target === input) {
//       // lekin agar same radio dobara click hua hai to manually uncheck karna hai
//       if (lastChecked === input) {
//         event.preventDefault(); // default rok do
//         input.checked = false;
//         lastChecked = null;
//       } else {
//         lastChecked = input;
//       }
//       return;
//     }

    // agar click label ya div par hua ho, to hum handle karte hain
//     event.preventDefault();

//     if (lastChecked === input) {
//       input.checked = false;
//       lastChecked = null;
//     } else {
//       input.checked = true;
//       lastChecked = input;
//     }
//   });
// });

const checkBox = document.getElementById("checkBox");
const checkBoxLabel = document.getElementById("checkBoxLabel");
const checkBoxOption = document.getElementById("checkBoxOption");

// ---------- (1) Checkbox Toggle Logic ----------

checkBoxOption.onclick = function Check_Box_Selector_And_Deselector(){

    if(checkBox.checked === true){
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
    }
};
checkBox.onclick = function Check_Box_Selector_And_Deselector(){

    if(checkBox.checked === true){
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
    }
};
checkBoxLabel.onclick = function Check_Box_Selector_And_Deselector(){

    if(checkBox.checked === true){
        checkBox.checked = false;
    }
    else {
        checkBox.checked = true;
    }
};

// ---------- (2) Radio Buttons Toggle Logic ----------

let lastChecked = null;

// Select and Run Function on all Radio Buttons :

document.querySelectorAll('input[name="payment"]').forEach(function (radio) {
  const parentDiv = radio.closest(".option");           // radio is present inside 'option' div

  parentDiv.addEventListener("click", function () {
    if (lastChecked === radio) {
      // If user clicked on the same radio again, uncheck it :
      radio.checked = false;
      lastChecked = null;
    } 
    else {
      // If user clicked on a different radio, check it :
      radio.checked = true;
      lastChecked = radio;
    }
  });
});

submitBtn.onclick = function showOutput() {
    if (checkBox.checked ) {
        subscribeOutput.textContent = `Welcome! You are our Subscriber!`;
        subscribeOutput.style.color = "#33ff00";

        if (checkBox.checked && (visa.checked || masterCard.checked || payPal.checked)) {
            if (visa.checked) {
                paymentOutput.textContent = `You are paying us through "Visa"`;
                paymentOutput.style.color = "yellow";
            } 
            else if (masterCard.checked) {
                paymentOutput.textContent = `You are paying us through "Master Card"`;
                paymentOutput.style.color = "yellow";
            } 
            else if (payPal.checked) {
                paymentOutput.textContent = `You are paying us through "PayPal"`;
                paymentOutput.style.color = "yellow";
            }
            } 
            else {
                paymentOutput.textContent = `Please select a payment method!`;
                paymentOutput.style.color = "red";
                paymentOutput.style.fontSize = "20px";
                paymentOutput.style.fontWeight = "bold";
                paymentOutput.style.fontFamily = "Segoe UI", Tahoma, Verdana, sans-serif;
        }
    }
    else if(checkBox.checked === false && (visa.checked || masterCard.checked || payPal.checked)) {
        subscribeOutput.textContent = `You DID NOT Subscribed our Plan!`;
        subscribeOutput.style.color = "red";
        subscribeOutput.style.fontSize = "20px";
        subscribeOutput.style.fontWeight = "bold";
        subscribeOutput.style.fontFamily = "Segoe UI", Tahoma, Verdana, sans-serif;
        paymentOutput.textContent = ``;
    }
//     else {
//     subscribeOutput.textContent = `You DID NOT Subscribed our Plan!`;
//     subscribeOutput.style.color = "red";
//     subscribeOutput.style.fontSize = "20px";
//     subscribeOutput.style.fontWeight = "bold";
//     subscribeOutput.style.fontFamily = "Segoe UI", Tahoma, Verdana, sans-serif;
//     paymentOutput.textContent = ``; 
//   }

};

// ----------------- Reloading/Refreshing the page after a specific time : -------------------

// ---------- Method 1 : -----------

// Reload every 10 seconds :

// setInterval(function refresh() {
//   location.reload()
//     }, 10000);

// refresh();

// ---------- Method 2 : -----------

// Reload after 5 seconds (5000 milliseconds) :

// setTimeout(function refresh() {
//   location.reload();
// }, 5000);
