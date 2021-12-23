// Arrow Functions

// Si es una sola funcion se puede declarar de esta manera
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

// Si son 2 o mas funciones se deben declarar de esta otra
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript'); 


// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

// forEach

meses.forEach(mes =>{
    // console.log(mes);
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

// Some ideal para arreglos de objetos
resultado = carrito.some(producto => producto.nombre == 'Celular')


// Reduce toma todos los numeros de un arreglo y te devuelve un resultado

resultado = carrito.reduce((total, producto) => total + producto.precio, 0)


// Filter

resultado = carrito.filter(producto => producto.precio > 400);


resultado = carrito.filter(producto => producto.nombre !== 'Tablet');

console.log(resultado);