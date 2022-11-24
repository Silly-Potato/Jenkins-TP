const { add, multiply, divide } = require("./main.js")

test('add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(4, -2)).toBe(2);
});

test('divide', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(1, 5)).toBe(0.2);
    expect(divide(-450, 5)).toBe(-90);
});

test('divide by 0', () => {
    expect(() => { divide(10, 0) }).toThrow("Division by 0.");
});

test('multiply',  () => {
    expect(multiply(7, 2)).toBe(14);
    expect(multiply(4, -2)).toBe(-8);
    expect(multiply(-23, -44)).toBe(1012);
});

test('add and multiply and divide', () => {
    expect(multiply(10, add(divide(10, 2), 7))).toBe(120);
});