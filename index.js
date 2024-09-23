// Function to add two numbers
function add(a /*: number*/, b /*: number*/) /*: number*/ {
    return a + b;
}

// Function to subtract two numbers
function subtract(a /*: number*/, b /*: number*/) /*: number*/ {
    return a - b;
}

// Function to multiply two numbers
function multiply(a /*: number*/, b /*: number*/) /*: number*/ {
    return a * b;
}

// Function to divide two numbers
function divide(a /*: number*/, b /*: number*/) /*: number*/ {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n /*: number*/) /*: number*/ {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num /*: number*/) /*: boolean*/ {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to get the Fibonacci sequence up to n
function fibonacci(n /*: number*/) /*: number[]*/ {
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}

// Function to reverse a string
function reverseString(str /*: string*/) /*: string*/ {
    return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(str /*: string*/) /*: boolean*/ {
    const reversed = reverseString(str);
    return str === reversed;
}

// Function to remove duplicates from an array
function removeDuplicates(arr /*: any[]*/) /*: any[]*/ {
    return [...new Set(arr)];
}

// Function to sort an array in ascending order
function sortArray(arr /*: number[]*/) /*: number[]*/ {
    return arr.slice().sort((a, b) => a - b);
}
