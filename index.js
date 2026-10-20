
function add(a, b) {
    return a + b; // BUG 1
}

function subtract(a, b) {
    return a - b; // BUG 2
}

function multiply(a, b) {
    return a * b; // BUG 3
}

function divide(a, b) {
    return a / b; // BUG 4
}

function divideByZero(a, b) {
    return a / b; // BUG 5
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log("Zero Division:", divideByZero(10, 0));
