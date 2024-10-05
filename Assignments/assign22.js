let arr = [10, 50, 30, 20, 60, 40, 80, 70, 90, 100, 1290];

let result = arr.every((el) => {
  return (el % 10 == 0);
});

if (result) {
  console.log("All elements are multiple of 10.");
} else {
  console.log("Array elements are not multiples of 10.")
}