import {calculator} from './calculator.js'
import {test, describe, expect} from '@jest/globals'

test('Check Addition', () => {
    expect(calculator.add(5,3)).toBe(8);
});

test('Check Subtraction', () => {
    expect(calculator.subtract(5,3)).toBe(2);
});

test('Check Multiplication', () => {
    expect(calculator.multiply(5,7)).toBe(35);
});

test('Check Division', () => {
    expect(calculator.divide(27,3)).toBe(9);
});