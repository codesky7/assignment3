function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const num = 17;
const isNumPrime = isPrime(num);
document.write(isNumPrime);