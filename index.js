/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */


function greet(time){
  let hourInteger = parseInt(time, 10)
  if(hourInteger < 12){
    return "Good Morning"
  }
  else if  (hourInteger > 12 && hourInteger < 17 ) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}



/* Write your implementation of displayMessage() */

function displayMessage(value) {
  document.getElementById("greeting").innerText = value;
}
