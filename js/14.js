// Arreglos o Arrays
// Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];

// Otra forma de declarar un arreglo
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// // Los arreglos pueden tener varios tipos de datos
// const arreglo = ["HOla", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1, 2, 3]];

// console.log(arreglo);

// // Acceder a los valores de un arreglo
// // console.log(numeros[4]);
// // console.log(numeros[2]);

// // Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero) {
//     console.log(numero);
// })

// Agregar un elemento al arreglo
// Forma menos comun, si colocas una posicion existente la modifica
// numeros[5] = 60; 

numeros.push(60, 80, 90); // Agregar elementos al final del arreglo
numeros.push(70);

numeros.unshift(-10,-20,-30); // Agregar elementos al inicio del arreglo

// meses.pop(); // Elimina el ultimo elemento
// meses.shift(); // Elimina el primer elemento

// meses.splice(2, 1); // Elimina elementos del arreglo en una posicion especifica el primer numero es la posicion del elemento en el arreglo y el segundo es la cantidad de elementos que deseas eliminar a partir de ahi

// La desventaja principal de estos metodos es que modifican el arreglo original

console.table(numeros);

// Rest Operator o Spread Operator 

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);