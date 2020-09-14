/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  const hoursMins = timeString.split(":")
  const hour = parseInt(hoursMins[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else
  return "Good Evening"
}

function displayMessage(string){
let greeting = document.querySelector('#greeting') 
greeting.innerText = string
}

// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".

// if (hour < 18) {
//   greeting = "Good day";
// }


// The `displayMessage` function should take one argument, a `String`.

// When the function runs it should update the text inside the `#greeting` node
// with the content of the argument.

// It does not return anything.