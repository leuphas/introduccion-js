const nombre = 'Edixon';
const email = 'edixonsalgueiro@gmail.com';

// Forma antigua de concatenar
console.log("Nombre Cliente: " + nombre + " " + "Email: "+ email);

// Se utiliza un poco mas que la anterior y el resultado es el mismo
console.log("Nombre Cliente: " , nombre , " " , "Email: ", email);

// Template Strings - String Literals (Forma actual de concatenar)
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);