import reverseString from './reverseString.js';

test('Red Leather, Yellow Leather, Lavender Leather.', () => {
    expect(reverseString('Red Leather, Yellow Leather, Lavender Leather.')).toBe('.rehtaeL rednevaL ,rehtaeL wolleY ,rehtaeL deR');
});

test('Another simple string', () => {
    expect(reverseString('123456789')).toBe('987654321');
});

// Must wrap the tested function or else the thrown Error will not be detected...
test('Test with a non-string value', () => {
    expect(() => {
        reverseString(1)
    }).toThrow();
});

test('Test with another non-string value', () => {
    expect(() => {
        reverseString(null)
    }).toThrow();
});
