import { capitalize } from './functions/capitalize.js';
import { reverseString } from './functions/reverseString.js';
import { calculator } from './functions/calculator.js';
import { caesarCipher } from './functions/caesarCipher.js';
import { analyzeArray } from './functions/analyzeArray.js';

test('Capitalize first character of string', () => {
  expect(capitalize('foobar is a funny word')).toBe('Foobar is a funny word');
});

test('Skip characters that are not letters', () => {
  expect(capitalize('???foobar is a funny word')).toBe('???Foobar is a funny word');
});

test('Return string if no letters present', () => {
  expect(capitalize('!@#$')).toBe('!@#$');
});

test('Reverse a string', () => {
  expect(reverseString('Mississippi!')).toBe('!ippississiM');
});

test('Adds two integers together', () => {
  expect(calculator.add(12, 24)).toBe(36);
});

test('Subtracts an integer from another', () => {
  expect(calculator.subtract(12, 24)).toBe(-12);
});

test('Divides an integer by another integer', () => {
  expect(calculator.divide(12, 24)).toBe(0.5);
});

test('Multiplies two integers', () => {
  expect(calculator.multiply(12, 24)).toBe(288);
});

test('Shift each character of string desired number of times', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Check for wrapping from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Check case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuation should remain unaffected', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Returns analyzed object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
