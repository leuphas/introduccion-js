const metodoPago = 'Cheque';

switch (metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'Cheque':
        console.log('El usuario va a pagar con Cheque, revisaremos los fondos primero');
        break;
    case 'Efectivo':
        console.log('Pagaste Efectivo');
        break;

    default:
        console.log('Aun no haz pagado');
        break;
}