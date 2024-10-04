let str = "yeshwantrao chavan college of engineering";
let unique = [];

for (let i = 0; i < str.length; i++) {
  if (unique.indexOf(str[i]) == -1) {
    unique.push(str[i]);
  } else {
    continue;
  }
} 

console.log(unique);