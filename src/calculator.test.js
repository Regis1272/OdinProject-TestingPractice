import calculator from './calculator.js';

// Addition
test('Basic addition', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Floating point addition', () => {
    expect(calculator.add(3.75, 3.75)).toBe(7.5);
});

// Subtraction
test('Basic subtraction', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('Floating point subtraction', () => {
    expect(calculator.subtract(7.5, 3.75)).toBe(3.75);
});

// Multiplication
test(() => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test(() => {
    expect(calculator.multiply(-.5, -10)).toBe(5);
});

// Division
test(() => {
    expect(calculator.divide(.5, 10)).toBe(.05);
});

test(() => {
    expect(calculator.divide(-10, 2)).toBe(-5);
});

test (() => {
    expect(calculator.divide(100, 5)).toBe(20);
});

// Incorrect input
test ('Addition with non-integer or floating point inputs', () => {
    expect(() => {
        calculator.add('a string', null);
    }).toThrow();
})

test ('Subtraction with non-integer or floating point inputs', () => {
    expect(() => {
        calculator.subtract('a string', null);
    }).toThrow();
})

test ('Multiplication with non-integer or floating point inputs', () => {
    expect(() => {
        calculator.multiply('a string', null);
    }).toThrow();
})

test ('Division with non-integer or floating point inputs', () => {
    expect(() => {
        calculator.divide('a string', null);
    }).toThrow();
})
