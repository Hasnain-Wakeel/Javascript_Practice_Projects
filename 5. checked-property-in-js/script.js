// .checked = It is a property that determines the checked state of an HTML checkbox or radio button element.

const checkBox = document.getElementById("checkBox");
const visa = document.getElementById("visa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");

const submitBtn = document.getElementById("submitBtn");

const subscribeOutput = document.getElementById("subscribeOutput");
const paymentOutput = document.getElementById("paymentOutput");


submitBtn.onclick = function showOutput() {
  if (checkBox.checked) {
    subscribeOutput.textContent = `Welcome! You are our Subscriber!`;
    subscribeOutput.style.color = "#33ff00";

        if (checkBox.checked && visa.checked || masterCard.checked || payPal.checked ) {
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
        }
    }
    else {
    subscribeOutput.textContent = `You DID NOT Subscribed our Plan!`;
    subscribeOutput.style.color = "red";
    paymentOutput.textContent = ``; 
  }
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
