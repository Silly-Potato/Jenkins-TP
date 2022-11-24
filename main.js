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


module.exports = { add, multiply, divide }