// For Loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre, carrito[i].precio);
    
}
// While Loop

// let i = 0; // Indice

// while (i < carrito.length) { // Condicion 

//     console.log(carrito[i].nombre);

//     i++; // Incremento
    
// }

// Do While Loop

let i = 0;

do {
    console.log(i);

    i++;
} while (i < 10);