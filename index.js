// Function to add two numbers
// @param {number} a - The first number
// @param {number} b - The second number
// @returns {number} The sum of a and b
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
// @param {number} a - The first number
// @param {number} b - The second number
// @returns {number} The difference of a and b
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
// @param {number} a - The first number
// @param {number} b - The second number
// @returns {number} The product of a and b
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
// @param {number} a - The numerator
// @param {number} b - The denominator
// @returns {number} The result of a divided by b
// @throws {Error} Division by zero is not allowed
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Function to calculate the factorial of a number
// @param {number} n - The number to calculate factorial of
// @returns {number} The factorial of n
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Function to check if a number is prime
// @param {number} num - The number to check
// @returns {boolean} True if num is a prime number, false otherwise
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to get the Fibonacci sequence up to n
// @param {number} n - The number of terms to generate
// @returns {number[]} The Fibonacci sequence up to n
function fibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}

// Function to reverse a string
// @param {string} str - The string to reverse
// @returns {string} The reversed string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
// @param {string} str - The string to check
// @returns {boolean} True if str is a palindrome, false otherwise
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

// Function to remove duplicates from an array
// @param {Array} arr - The array from which to remove duplicates
// @returns {Array} A new array with duplicates removed
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Function to sort an array in ascending order
// @param {Array<number>} arr - The array to sort
// @returns {Array<number>} The sorted array
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Function to format a date to yyyy-mm-dd
// @param {Date} date - The date to format
// @returns {string} The formatted date string
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to get the number of days in a month
// @param {number} year - The year
// @param {number} month - The month (1-12)
// @returns {number} The number of days in the specified month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Function to check if a string is empty
// @param {string} str - The string to check
// @returns {boolean} True if str is empty, false otherwise
function isEmpty(str) {
    return !str.trim().length;
}

// Function to calculate the area of a rectangle
// @param {number} width - The width of the rectangle
// @param {number} height - The height of the rectangle
// @returns {number} The area of the rectangle
function rectangleArea(width, height) {
    return width * height;
}

// Function to calculate the perimeter of a rectangle
// @param {number} width - The width of the rectangle
// @param {number} height - The height of the rectangle
// @returns {number} The perimeter of the rectangle
function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}

// Function to calculate the area of a circle
// @param {number} radius - The radius of the circle
// @returns {number} The area of the circle
function circleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
// @param {number} radius - The radius of the circle
// @returns {number} The circumference of the circle
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function to calculate the volume of a cube
// @param {number} side - The length of a side of the cube
// @returns {number} The volume of the cube
function cubeVolume(side) {
    return Math.pow(side, 3);
}

// Function to calculate the volume of a sphere
// @param {number} radius - The radius of the sphere
// @returns {number} The volume of the sphere
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Function to calculate the volume of a cylinder
// @param {number} radius - The radius of the cylinder
// @param {number} height - The height of the cylinder
// @returns {number} The volume of the cylinder
function cylinderVolume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}

// Function to convert milliseconds to seconds
// @param {number} ms - The milliseconds to convert
// @returns {number} The equivalent seconds
function msToSec(ms) {
    return ms / 1000;
}

// Function to convert seconds to milliseconds
// @param {number} sec - The seconds to convert
// @returns {number} The equivalent milliseconds
function secToMs(sec) {
    return sec * 1000;
}

// Function to format milliseconds into a human-readable format
// @param {number} ms - The milliseconds to format
// @returns {string} The formatted time string
function formatMs(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
}

// Function to generate a random alphanumeric string
// @param {number} length - The length of the random string
// @returns {string} The generated random string
function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}

// Function to calculate the mean of an array of numbers
// @param {Array<number>} arr - The array of numbers
// @returns {number} The mean of the array
function mean(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Function to calculate the median of an array of numbers
// @param {Array<number>} arr - The array of numbers
// @returns {number} The median of the array
function median(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

// Function to calculate the mode of an array of numbers
// @param {Array<number>} arr - The array of numbers
// @returns {number} The mode of the array
function mode(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mode;
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = num;
        }
    });
    return mode;
}

// Function to calculate the range of an array of numbers
// @param {Array<number>} arr - The array of numbers
// @returns {number} The range of the array
function range(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

// Function to validate an email address
// @param {string} email - The email address to validate
// @returns {boolean} True if email is valid, false otherwise
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate a phone number
// @param {string} phone - The phone number to validate
// @returns {boolean} True if phone number is valid, false otherwise
function validatePhoneNumber(phone) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
}

// Function to calculate the power of a number
// @param {number} base - The base number
// @param {number} exponent - The exponent
// @returns {number} The result of base raised to the exponent
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the square root of a number
// @param {number} num - The number to find the square root of
// @returns {number} The square root of num
function squareRoot(num) {
    return Math.sqrt(num);
}

// Function to round a number to a specified number of decimal places
// @param {number} num - The number to round
// @param {number} decimalPlaces - The number of decimal places to round to
// @returns {number} The rounded number
function roundToDecimal(num, decimalPlaces) {
    return Number(num.toFixed(decimalPlaces));
}

// Function to check if a number is a power of two
// @param {number} num - The number to check
// @returns {boolean} True if num is a power of two, false otherwise
function isPowerOfTwo(num) {
    return (num > 0) && (num & (num - 1)) === 0;
}

// Function to calculate the greatest common divisor of two numbers
// @param {number} a - The first number
// @param {number} b - The second number
// @returns {number} The greatest common divisor of a and b
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Function to calculate the least common multiple of two numbers
// @param {number} a - The first number
// @param {number} b - The second number
// @returns {number} The least common multiple of a and b
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Function to calculate the hypotenuse of a right triangle
// @param {number} a - The length of the first side
// @param {number} b - The length of the second side
// @returns {number} The length of the hypotenuse
function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

// Function to encode a string to Base64
// @param {string} str - The string to encode
// @returns {string} The Base64 encoded string
function encodeBase64(str) {
    return btoa(str);
}

// Function to decode a Base64 string
// @param {string} str - The Base64 encoded string
// @returns {string} The decoded string
function decodeBase64(str) {
    return atob(str);
}

// Function to escape HTML characters in a string
// @param {string} html - The HTML string to escape
// @returns {string} The escaped HTML string
function escapeHtml(html) {
    return html.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Function to unescape HTML characters in a string
// @param {string} html - The HTML string to unescape
// @returns {string} The unescaped HTML string
function unescapeHtml(html) {
    return html.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

// Function to generate a UUID
// @returns {string} The generated UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
