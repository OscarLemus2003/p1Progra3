// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Función de filtro para obtener solo números pares
const esPar = numero => numero % 2 === 0;

// Usando el método filter para obtener un nuevo array con números pares
const numerosPares = numeros.filter(esPar);

console.log(numerosPares); // Resultado: [2, 4, 6, 8, 10, 12]
