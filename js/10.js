// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// Con un objeto puedes fusionar las 3 variables de arriba

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

// De esta forma accedes a la propiedad de un objeto
console.log(producto.precio); 
console.log(producto.nombreProducto); 
console.log(producto.disponible); 

// otra forma de acceder a una propiedad
console.log(producto["precio"]);