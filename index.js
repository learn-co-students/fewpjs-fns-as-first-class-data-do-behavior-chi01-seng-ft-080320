/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  time = time.split(':')[0]
  time = parseInt(time, 0)
  if (time < 12) {return `Good Morning`}
  if (time > 17) {return `Good Evening`}
  return `Good Afternoon`
  }

  function displayMessage(greeting) {
    document.querySelector('#greeting').innerText = greeting 
  }

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
