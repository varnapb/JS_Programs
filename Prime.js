function isPrime(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) return false;
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function checkFirstElementPrime(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Array is empty or invalid.";
  }

  const firstElement = arr[0];

  if (typeof firstElement !== "number" || !Number.isInteger(firstElement)) {
    return "First element is not a valid integer number.";
  }

  return isPrime(firstElement)
    ? `${firstElement} is a prime number.`
    : `${firstElement} is not a prime number.`;
}

console.log(checkFirstElementPrime([17, 23, 42]));
