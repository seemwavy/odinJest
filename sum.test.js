const sum = require('./sum');
test ('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    }
);
const stuff = ['apples', 'bananas', 'oranges', 'boof'];
test('the stuff array contains boof', () => { 
    expect(stuff).toContain('boof');
    }
);

function capitalize(str) {
    return  str.charAt(0).toUpperCase() + str.slice(1);
}

test('capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toMatch('Hello');
}); 
function reverseString(str) {
    return str.split('').reverse().join('');
}
test('reverse a string', () => {
    expect(reverseString('hello')).toMatch('olleh');
});
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}
test('calculate 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.divide(2, 2)).toBe(1);
});

function analyzeArray(arr) {
    let sum = 0;
    let average = 0;
    let min = arr[0];
    let max = arr[0];
    length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    average = sum / arr.length;
    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    }
}
test('analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});