  let arrayAverage = (arr) => {
    let sum = 0;
    
    for (elements of arr) {
      sum += elements;
    }

    return sum/arr.length;

  }

  let array = [2,4,6,8,10];

  console.log(arrayAverage(array));