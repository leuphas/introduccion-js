// Funciones 

// Declaracion de funcion 
function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE son utiles para que las variables y funciones no se mezclen con la de otros archivos
(function() {
    console.log('Esto es una funcion');
})();

// Hoisting Java se ejecuta en 2 etapas en la primera registra todas las funciones y en la segunda ejecuta el programa
// Por eso en la declaracion de funcion no importa el orden y en expresion de funcion si 
