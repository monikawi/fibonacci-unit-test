//Execute with "npm run test"

const fib = require("./fib");

test('Should return an array object and keep array length the same as passed argument', () => {
  expect(typeof fib(10)).toEqual('object');
  expect(fib(15)).toBeInstanceOf(Array);
  expect(fib(20)).toHaveLength(20);
});


test('Should handle input between 0 and 2 and return the correct array', () => {
  expect(fib(0)).toEqual([]);
  expect(fib(1)).toEqual([0]);
  expect(fib(2)).toEqual([0, 1]);
});


test('Should satisfy the requirements of a valid Fibonacci sequence', () => {
  expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fib(50)).toContain(7778742049);
  expect(fib(79)).toContain(8944394323791464);
});


test('Should throw an appropriate error if given an incorrect argument', () => {
  expect(() => {fib(NaN)}).toThrowError(TypeError);
  expect(() => {fib(null)}).toThrowError(TypeError);
  expect(() => {fib(undefined)}).toThrowError(TypeError);
  expect(() => {fib(true)}).toThrowError(TypeError);
  expect(() => {fib(false)}).toThrowError(TypeError);
  expect(() => {fib(Symbol(10))}).toThrowError(TypeError);
  expect(() => {fib("10")}).toThrowError(TypeError);
  expect(() => {fib(10.5)}).toThrowError(TypeError);
  expect(() => {fib(-10)}).toThrowError(RangeError);
  expect(() => {fib(80)}).toThrowError(RangeError);
});