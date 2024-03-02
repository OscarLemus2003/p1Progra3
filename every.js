// Función de prueba para verificar si un número es mayor que 0
function esMayorQueCero(numero) {
    return numero > 0;
  }
  
  // Arreglo de números
  const numeros = [5, 0, 0, 0, 0];
  
  // Utilizando el método every para verificar si todos los elementos son mayores que 0
  const todosMayoresQueCero = numeros.every(esMayorQueCero);
  
  // Imprimiendo el resultado
  console.log("¿Todos los números son mayores que 0?", todosMayoresQueCero);
  