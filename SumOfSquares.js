function sumOfSquares(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num * num;
  }
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers)); // Output: 55
