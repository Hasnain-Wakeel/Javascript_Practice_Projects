// Taking Input from User :

// -------------- Simple Way : ------------

// const userName = prompt("Enter Your Name : ");
// console.log(userName);

// -------------- Professional Way : ------------

let userName;
document.getElementById("myButton").onclick = function () {
  userName = document.getElementById("inputField").value;
  document.getElementById("h3").textContent = `Welcome, ${userName}! `;
  console.log(userName);
};
