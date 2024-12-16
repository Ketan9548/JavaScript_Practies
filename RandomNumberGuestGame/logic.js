let val = document.getElementById("number");
const inputelement = document.getElementById("inputval");

function random() {
  let inputval = parseInt(inputelement.value, 10); // Convert input to number
  let randomnumber = Math.floor(Math.random() * 5); // Random number between 0-4
  val.innerHTML = randomnumber.toString(); // Display the random number in the "number" element

  if (inputval === randomnumber) {
    alert("Won the game");
  } else {
    alert("Try again!");
  }
}
