setTimeout(() => {
    console.log("Hola despues de 1 segundo");
     
}, 3000);


// Primer CallBack

let getUserById = ( id, callback ) => {

    let user = {
        name: 'Erik',
        id         // se pone un solo ID xq en ES6 no es necesario poner el mismo nombre de parametro
    };

    if (id === 20) {    // Con esto simulo un error
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, user);
    }


};


getUserById( 20, (err, user) => {

    if (err) {

        console.log("valor usuario",user);
        
        return console.log(err);
    }
    console.log(err);
    
    console.log('User de BBDD', user);
    
});