const argv = require('./config/yargs').argv;
const multiplicar = require('./multiplicar/multiplicar');

let command = argv._[0];


switch (command) {
    case 'listar':
        multiplicar.listarTabla( argv.base, argv.limite );
        break;

    case 'crear':
        multiplicar.crearArchivo( argv.base, argv.limite )
            .then(resp => console.log('Creado: ' + resp))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}