let val = document.getElementById("number");
const inputelement = document.getElementById("inputval");
const text = document.getElementById("text");
let count = 0;

function random() {
  let inputval = parseInt(inputelement.value, 10);
  let randomnumber = Math.floor(Math.random() * 100);
  val.innerHTML = randomnumber.toString();
  count++;
  if (inputval === randomnumber && count === 1) {
    alert("Won the game");
  } else if (count === 10) {
    inputelement.value = "";
    alert("you exceeded the limit");
  } else {
    text.innerHTML = "Try again";
  }
}
