const fibonacciRecursion = (n) => {
  return n === 0 || n === 1 ? 1 : fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

const fibonacciIteration = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  let a = 1; // F(0)
  let b = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b; 
}

const main = () => {
  const n = 10; 
  const recursiveResult = fibonacciRecursion(n);
  const iterativeResult = fibonacciIteration(n);

  console.log(`Рекурсивно: F(${n}) = ${recursiveResult}`);
  console.log(`Итеративно: F(${n}) = ${iterativeResult}`);
}

main();