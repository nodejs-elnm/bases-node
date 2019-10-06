const fs = require('fs');

let data = '';



let listarTabla = ( base, limite=10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
};


let crearArchivo = async ( base, limite=10 ) => {
    

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, No es un número!`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (new Error(err));
            else resolve (`tablas/tabla-${base}.txt`);
        });
    });
    

};

module.exports = {
    crearArchivo,
    listarTabla
};


