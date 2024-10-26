function findMissingElement(arr) {
    // n is the size of the full range, which is arr.length + 1
    let n = arr.length + 1;

    // Calculate the expected sum from 1 to n using the sum formula
    let totalSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of elements in the array
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    
    // The missing number is the difference between totalSum and actualSum
    return totalSum - actualSum;
}

// Example usage:
console.log(findMissingElement([1, 2, 3, 5])); // Output: 4
console.log(findMissingElement([8, 2, 4, 5, 3, 7, 1])); // Output: 6
console.log(findMissingElement([1])); // Output: 2

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = arr.reduce((acc, curr) => acc + curr, 0); // Initial value = 0
// console.log(sum);
