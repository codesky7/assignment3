function squareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
  
  const numbers = [2, 4, 6, 8];
  const result = squareRootOfSumOfSquares(numbers);
  document.write(result);