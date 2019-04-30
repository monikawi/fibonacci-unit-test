function fib(num){
  let arr = [0, 1];

  if(!Number.isInteger(num)) {
    throw new TypeError(`${num} is not an integer. Enter a valid NUMBER and do not use a decimal point.`);
  } else if(num < 0) {
    throw new RangeError(`${num} is a negative number. Enter a POSITIVE number.`)
  } else if(num >= 80) {
    throw new RangeError(`Accurate values are not available for length of ${num} or any other equal to or above 79`)
  } else if(num === 0) {
    return [];
  } else if(num === 1) {
    return [0];
  } else {
    for (let i = 2; i < num; i++){
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }
 return arr;
}

module.exports = fib;
