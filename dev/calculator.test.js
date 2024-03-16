const { add, subtract, multiply, divide } = require('./calculator');

// Pruebas para la función add()
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Pruebas para la función subtract()
test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

// Pruebas para la función multiply()
test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

// Pruebas para la función divide()
test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

// Prueba para verificar la excepción cuando se divide por cero
test('divide by zero throws an error', () => {
  expect(() => divide(6, 0)).toThrow("División por cero");
});
