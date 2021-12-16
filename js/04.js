// String o cadena de texto

const tweet = 'Aprendiendo Javascript con el curso de desarrollo web completo'; 
const producto2 = 'Monitor HD'; 

console.log(tweet.length); // .length muestra cuantos caracteres tiene el texto es de los pocos metodos que no lleva parentesis esto mas que nada porque no es un metodo sino mas bien una propiedad
console.log(producto2);

// IndexOf busca un texto especifico y te muestra su posicion 
console.log(tweet.indexOf("Javascript"));
console.log(producto2.indexOf("Tablet")); //si muestra un numero negativo en la consola es la palabra no se encuentra en el string

// Includes retorna true o false
console.log(tweet.includes("Javascript"));
console.log(producto2.includes("Tablet"));