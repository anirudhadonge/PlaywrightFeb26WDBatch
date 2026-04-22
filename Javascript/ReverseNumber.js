// Method 1: Reverse a Number using String conversion
// Using Number type for storing a number

function reverseNumber(num) {
    // Ensure input is a Number type
    const number = Number(num);
    
    // Check if it's a valid number
    if (isNaN(number)) {
        return "Invalid number";
    }
    
    // Reverse the number
    const reversed = Number(
        String(Math.abs(number))
            .split('')
            .reverse()
            .join('')
    );
    
    // Return with original sign
    return number < 0 ? -reversed : reversed;
}

// Test cases
console.log("Test Case 1: reverseNumber(12345) =", reverseNumber(12345));      // Output: 54321
console.log("Test Case 2: reverseNumber(-12345) =", reverseNumber(-12345));     // Output: -54321
console.log("Test Case 3: reverseNumber(1000) =", reverseNumber(1000));         // Output: 1
console.log("Test Case 4: reverseNumber(505) =", reverseNumber(505));           // Output: 505
console.log("Test Case 5: reverseNumber(100) =", reverseNumber(100));           // Output: 1
console.log("Test Case 6: reverseNumber(-500) =", reverseNumber(-500));         // Output: -5
console.log("Test Case 7: reverseNumber(0) =", reverseNumber(0));               // Output: 0
