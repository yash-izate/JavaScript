let para1 = document.createElement("p");
para1.innerText = "Hey I am red.";
document.querySelector("body").append(para1);
para1.classList.add("red");

let heading1 = document.createElement("h1");
heading1.innerText = "Document Object Model";
document.querySelector("body").prepend(heading1);
heading1.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in Div container.";
para2.innerText = "Me too!";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);