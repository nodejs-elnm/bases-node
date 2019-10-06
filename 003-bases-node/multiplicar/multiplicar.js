const fs = require('fs');

let data = '';

let crearArchivo = async ( base ) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, No es un número!`);
            return;
        }

        for (let i = 1; i < 11; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (new Error(err));
            else resolve (`tablas/tabla-${base}.txt`);
        });
    });
    

};

module.exports = {
    crearArchivo
};


