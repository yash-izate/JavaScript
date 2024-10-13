let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  console.log("Button Clicked");
})

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
  console.log("Code:", event.code);
  console.log("Key was pressed");
})

inp.addEventListener("keyup", function(event) {
  console.log("Key was released");
})

