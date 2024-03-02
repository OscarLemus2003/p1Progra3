// Definir un arreglo de objetos
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 22 },
    { nombre: 'Ana', edad: 35 }
  ];
  
  // Utilizar el método find para encontrar la primera persona mayor de 30 años
  const personaMayorDe30 = personas.find(persona => persona.edad > 30);
  
  // Imprimir el resultado
  if (personaMayorDe30) {
    console.log(`${personaMayorDe30.nombre} es mayor de 30 años.`);
  } else {
    console.log('No se encontró ninguna persona mayor de 30 años.');
  }
  