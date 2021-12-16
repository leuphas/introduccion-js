// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

// De esta forma accedes a la propiedad de un objeto
// console.log(producto.precio); 
// console.log(producto.nombreProducto); 
// console.log(producto.disponible); 

// otra forma de acceder a una propiedad
// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

console.log(producto);