// "use strict"; // Ejecuta el codigo js de forma estricta

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// No permite agregar, ni cambiar ni eliminar nuevas propiedades
// Object.freeze(producto);

// producto.imagen = 'imagen.jpg';

// // Como saber si un objeto esta sellado

// console.log(Object.isFrozen(producto));

// console.log(producto);

// No permite agregar ni eliminar nuevas propiedades pero si permite modificar
Object.seal(producto);

producto.imagen = 'imagen.jpg';

// Como saber si un objeto esta sellado

console.log(Object.isSealed(producto));

console.log(producto);