let arr = [2, 5, 10, 4, 2, 7, 1, 9, 89];
let largest = 0;
for (let i = 0; i <= arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

console.log(largest);