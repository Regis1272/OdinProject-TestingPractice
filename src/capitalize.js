const capitalize = (string) => {
    let firstChar = string.codePointAt(0);
    let newString = string.split('');

    if (firstChar >= 97 && firstChar <= 122) {
        newString[0] = string[0].toUpperCase();
    } else {
        return string;
    }
    return newString.join('');
}

export default capitalize;
