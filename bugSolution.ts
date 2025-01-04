function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Invalid input: Arguments must be numbers";
  }
}

const result1 = addSafe(1, 2); // Correct usage
const result2 = addSafe("1", 2); // Handles the error gracefully
const result3 = addSafe(1, "2");

console.log(result1); // Output: 3
console.log(result2); // Output: Invalid input: Arguments must be numbers
console.log(result3); // Output: Invalid input: Arguments must be numbers