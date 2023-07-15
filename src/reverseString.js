const reverseString = (string) => {
    if (typeof string !== "string") {
        throw new Error('Parameter is not a string!');
    } else {
        return string.split('').reverse().join('');
    }
}

export default reverseString;
