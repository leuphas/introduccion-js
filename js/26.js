// This

const reservacion = {
    nombre: 'Edixon',
    apellido: 'Gonzalez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();