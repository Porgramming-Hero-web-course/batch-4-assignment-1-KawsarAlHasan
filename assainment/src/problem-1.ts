function sumArray(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Input
console.log(sumArray([10, 5, 13, 4, 7])); // Output: 15
