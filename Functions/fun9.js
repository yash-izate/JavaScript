let arr = [5,3,8,2,9];

let min = arr.reduce((min,el) => {
  if(min < el) {
    return min;
  } else {
    return el;
  }
});

console.log(min);