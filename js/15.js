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

meses.forEach(function(mes){
    // console.log(mes);
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes funciona bien con un arreglo plano, cuando tiene objetos no es la mejor opcion 
let resultado = meses.includes('Marzo');
// const resultado2 = carrito.includes('Celular');

// Some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == 'Celular'
})

// Reduce toma todos los numeros de un arreglo y te devuelve un resultado

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)

// Filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado);