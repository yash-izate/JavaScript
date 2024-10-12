let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

btn.classList.add("button");
input.classList.add("input");

// input.placeholder = "search here...";
input.setAttribute("placeholder", "search here...")

btn.setAttribute("id", "btn1");

let para = document.createElement("p");
para.innerHTML = "<b>Apna College</b> <u>Delta</u> <i>Student</i> !!!";
document.querySelector("body").append(para);
