const url = "https://api.restful-api.dev/objects";
const val = new Array();

// function fetchdata(params) {
//   fetch(url)
//     .then((data) => data.json())
//     .then((d) => console.log(d))
//     .catch((err) => console.log("the error is: ", err));
// }

function fetchdata(params) {
  fetch(url)
    .then((data) => data.json())
    .then((d) => console.log(d))
    .catch((err) => console.log("the error is: ", err));
}

fetchdata();
// console.log(val);
