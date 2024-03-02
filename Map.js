// Ejemplo: Duplicar cada elemento de un arreglo
//Arreglo Map
const arregloOriginal = [1, 2, 3, 4, 5];

const arregloDuplicado = arregloOriginal.map(function(elemento) {
  return elemento * 2;
});

console.log(arregloDuplicado); // Output: [2, 4, 6, 8, 10]
