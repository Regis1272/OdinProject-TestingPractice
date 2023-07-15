import capitalize from './capitalize.js';


// Test best-case input (lower-case letter at index 0)
test('Test for designed scenario.', () => {
    expect(capitalize('red leather')).toBe('Red leather');
});

// Test non-alphabetical chars
test('Testing non-alphabetical chars at index 0', () => {
    expect(capitalize(' hello')).toBe(' hello');
});

test('Testing already capitalized chars', () => {
    expect(capitalize('XYLOPHONE MUSIC')).toBe('XYLOPHONE MUSIC');
})
