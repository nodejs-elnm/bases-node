const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;

let base = argv[2];

console.log(base);


crearArchivo( base )
    .then ( resp => console.log(resp))
    .catch ( err => console.log(err));