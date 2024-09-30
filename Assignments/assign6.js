let num1 = String(prompt("Enter first number !"));
let num2 = String(prompt("Enter second number !"));

if (num1[num1.length-1] == num2[num2.length-1]) {
  alert("Last digits are same.")
}

else {
  console.log("Last digits are not same.")
}