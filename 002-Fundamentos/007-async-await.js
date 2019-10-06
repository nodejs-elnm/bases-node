//Async y await


// Con poner async antes de la declaracion de una función, podríamos omitir el crear un new Promise, xq ya devolveríamos una promesa.

let getName = async () => {
    return 'Fernando';
};

getName()
    .then( resp => console.log(resp))
    .catch( err => console.log('Error de async ', err));
    
let getName2 = () => {
    return new Promise ( (resolve, reject ) => {

        setTimeout(() => {
            resolve('Erik');
        }, 3000);

    });
};

// Await debe estar dentro de una función declarada como async
// await hace que una promesa sea tratada como un instrucción secuencial, mientras no responda no se puede continuar


let saludo = async() => {
    let name = await getName2();

    return `Hola ${ name }`;
};


saludo()
    .then( resp => console.log(resp));
