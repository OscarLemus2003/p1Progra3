// Definir un arreglo de palabras
const palabras = ["hola", "mundo", "java", "pro"];

// Verificar si al menos una palabra tiene más de 5 letras
const algunaPalabraMasDeCincoLetras = palabras.some((palabra) => palabra.length > 5);

// Imprimir el resultado
console.log(algunaPalabraMasDeCincoLetras); // Salida esperada: true
