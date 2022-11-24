function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0) {
        return a / b;
    }
    throw new Error("Division by 0.");
}

console.log("Hello Jenkins!")
console.log("4 + 5 * 3 - 135 / 5 = " + add(add(4, multiply(5, 3)), divide(-135, 5)))

module.exports = { add, multiply, divide }