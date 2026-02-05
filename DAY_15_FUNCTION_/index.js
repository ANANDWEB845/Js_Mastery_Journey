// Function to calculate sum of even numbers from 1 to n
function sumOfEven(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

// Driver code
function main() {
  let n = 10;

  let result = sumOfEven(n);

  console.log("Sum of even numbers:");
  console.log(result);
}

// Function call
main();

// Example:
// n = 10
// Even numbers: 2, 4, 6, 8, 10
// Output: 30

// Time Complexity: O(n)
// Space Complexity: O(1)

