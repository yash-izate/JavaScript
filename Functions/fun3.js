let country = ["Australia", "Germany", "United States of America", "India", "Sri Lanka", "United Kingdom Of England"];
let length = 0;
let idx = 0;

for(let i= 0; i < country.length; i++) {
  if (country[i].length >= length) {
    length = country[i].length;
    idx = i;
  } 
}

console.log(country[idx]);