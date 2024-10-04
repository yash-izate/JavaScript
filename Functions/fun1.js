let arr = [2, 7, 5, 9, 11, 45, 87, 32, 23, 74];
let n = 31;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= n) {
    newArr.push(arr[i]);
  } else {
    continue;
  }
}

console.log(newArr);