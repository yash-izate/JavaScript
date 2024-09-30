
let str = prompt("Enter your string below: ");

if ((str[0] == 'a' || str[0] == 'A') && str.length >= 5) {
  console.log("It is golden string.")
} else {
  console.log("It is not a golden string.")
}
