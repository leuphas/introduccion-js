// POO

// Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop',800, false);

console.log(producto2);
console.log(producto3);