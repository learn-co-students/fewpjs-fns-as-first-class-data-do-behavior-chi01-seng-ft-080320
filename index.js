/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const time = parseInt(timeString, 10);
  if (time < 12) return "Good Morning"
  if (time > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msgString) {
  document.getElementById("greeting").innerText = msgString;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
