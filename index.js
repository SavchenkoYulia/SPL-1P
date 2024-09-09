// Function to add two numbers
function add(a, b) {
    return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}
// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}
// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
// Function to check if a number is prime
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
function fibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}
// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}
// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Function to sort an array in ascending order
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}
// Function to format a date to yyyy-mm-dd
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return ${year}-${month}-${day};
}
// Function to get the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
// Function to check if a string is empty
function isEmpty(str) {
    return !str.trim().length;
}
// Function to calculate the area of a rectangle
function rectangleArea(width, height) {
    return width * height;
}
// Function to calculate the perimeter of a rectangle
function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}
// Function to calculate the area of a circle
function circleArea(radius) {
    return Math.PI * radius * radius;
}
// Function to calculate the circumference of a circle
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}
// Function to calculate the volume of a cube
function cubeVolume(side) {
    return Math.pow(side, 3);
}
// Function to calculate the volume of a sphere
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
// Function to calculate the volume of a cylinder
function cylinderVolume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}
// Function to convert milliseconds to seconds
function msToSec(ms) {
    return ms / 1000;
}
// Function to convert seconds to milliseconds
function secToMs(sec) {
    return sec * 1000;
}
// Function to format milliseconds into a human-readable format
function formatMs(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return ${hours}h ${minutes % 60}m ${seconds % 60}s;
}
// Function to generate a random alphanumeric string
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
function mean(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}
// Function to calculate the median of an array of numbers
function median(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}
// Function to calculate the mode of an array of numbers
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
function range(arr) {
    return Math.max(...arr) - Math.min(...arr);
}
// Function to validate an email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Function to validate a phone number
function validatePhoneNumber(phone) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
}

// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to calculate the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}
// Function to round a number to a specified number of decimal places
function roundToDecimal(num, decimalPlaces) {
    return Number(num.toFixed(decimalPlaces));
}

// Function to check if a number is a power of two
function isPowerOfTwo(num) {
    return (num > 0) && (num & (num - 1)) === 0;
}
// Function to calculate the greatest common divisor of two numbers
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
// Function to calculate the least common multiple of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
// Function to encode a string to Base64
function encodeBase64(str) {
    return btoa(str);
}
// Function to decode a Base64 string
function decodeBase64(str) {
    return atob(str);
}
// Function to escape HTML characters in a string
function escapeHtml(html) {
    return html.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
// Function to unescape HTML characters in a string
function unescapeHtml(html) {
    return html.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}
// Function to generate a UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}