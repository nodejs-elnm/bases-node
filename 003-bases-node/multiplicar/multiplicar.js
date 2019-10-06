const fs = require('fs');
const color = require('colors');


let listarTabla = ( base, limite=10) => {

    console.log('========================'.green);
    console.log(`===== Tabla del ${ base } ======`.green);
    
    

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
};


let crearArchivo = async ( base, limite=10 ) => {
    

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${ base }, No es un número!`.bgRed);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (new Error(err));
            else resolve (`tablas/tabla-${base}.txt`.green);
        });
    });
    

};

module.exports = {
    crearArchivo,
    listarTabla
};


