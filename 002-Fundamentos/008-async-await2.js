// Definir arreglos, simulando BD
let employees = [{
    id: 1,
    name: 'Erik'
}, {
    id: 2,
    name: 'Leonel'
}, {
    id: 3,
    name: 'Fernando'
}];

let salaries = [{
    id: 1,
    salary: 1000
}, {
    id: 2,
    salary: 2000
}];


let getEmploye = async (id) => {

    let employeDB = employees.find(employe => employe.id === id);

    if (!employeDB) {
        throw new Error(`No existe empleado con id: ${id}`);  //reject para cuando da error
    } else {
        return employeDB;         //resolve solo puede enviar un parámetro, puede también ser un objeto
    }
    
};

let getSalary = async (employe) => {

    let salaryDB = salaries.find(salary => salary.id === employe.id);

    if (!salaryDB) {
        throw new Error(`No se encontró salario para el empleado: ${employe.name}`);
    } else {
        return ({
            name: employe.name,
            salary: salaryDB.salary
        });
    }


};


let getInfo = async (id) => {

    let employe = await getEmploye(id);
    let resp = await getSalary(employe);
    
    return `${ resp.name } tiene un salario de ${ resp.salary }$`;
    
    
};


getInfo(3)
    .then( resp => console.log(resp) )
    .catch( err => console.log(err) );