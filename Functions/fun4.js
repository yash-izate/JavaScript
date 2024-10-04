let str = "apna college in nagpur";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i])) {
    count = count + 1;
  }
}

console.log(`The number of vowels in string is ${count}`);