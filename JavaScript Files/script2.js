let pencilPrice = 10;
let erasorPrice = 5;
console.log("The total price is: ", pencilPrice + erasorPrice);

let bookPrice = 50;
let bagPrice = 250;
let output = "The total price of items purchased is: " + (bookPrice+bagPrice) + " rupees";
console.log(output);

// now in template literal form using backtick ``
// They are used to add embedded expressions in a string

let shirtPrice = 2499;
let pantPrice = 1699;
let cartValue = `The total cart value is: ${shirtPrice+pantPrice} rupees`;
console.log(cartValue);