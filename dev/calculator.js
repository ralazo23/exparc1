// Función para sumar dos números
function add(a, b) {
    return a + b;
  }
  
  // Función para restar dos números
  function subtract(a, b) {
    return a - b;
  }
  
  // Función para multiplicar dos números
  function multiply(a, b) {
    return a * b;
  }
  
  // Función para dividir dos números
  function divide(a, b) {
    if (b === 0) {
      throw new Error("División por cero");
    }
    return a / b;
  }
  
  module.exports = { add, subtract, multiply, divide };
  