// Arreglos o Arrays
// Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];
console.table(numeros);

// Otra forma de declarar un arreglo
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// Los arreglos pueden tener varios tipos de datos
const arreglo = ["HOla", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1, 2, 3]];

console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

// Conocer la extension de un arreglo
console.log(meses.length);

numeros.forEach(function(numero) {
    console.log(numero);
})