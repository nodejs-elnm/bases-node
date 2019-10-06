
// Definir arreglos, simulando BD
let employees = [{
    id: 1,
    name: 'Erik'
},{
    id: 2,
    name: 'Leonel'
},{
    id: 3,
    name: 'Fernando'
}];

let salaries = [{
    id: 1,
    salary: 1000
},{
    id: 2,
    salary: 2000
}];


let getEmploye = (id, callback) => {

    let employeDB = employees.find( employe => employe.id === id);


    if ( !employeDB ) {
        callback(`No existe empleado con id: ${ id }`);
    } else {
        callback(null, employeDB);
    }
};


let getSalary = (employe, callback) => {
    
    let salaryDB = salaries.find( salary => salary.id === employe.id);

    if ( !salaryDB) {
        callback(`No se encontró salario para el empleado: ${ employe.name }`);
    } else {
        callback(null, {
            name: employe.name,
            salary: salaryDB.salary
        });  
    } 
    
};


getEmploye(3, (err, employeDB) => {

    if (err) {
        return console.log(err);
    }

    getSalary(employeDB, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.name } es ${ resp.salary}$`);
        
    });
    
});