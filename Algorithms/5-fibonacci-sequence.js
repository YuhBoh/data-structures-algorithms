// Fibonacci Sequence
// Problem: Given number "n", find first "n" elements of Fibonacci sequence.

// Fibonacci Sequence: Sequence in which each number is sum of two preceding ones.

// First two numbers are 0 + 1
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
  const fib = [0,1];
  for (i=2; i<n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

console.log(fibonacci(3))
//Big O = O(n)