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


let getEmploye = (id) => {

    return new Promise((resolve, reject) => {
        let employeDB = employees.find(employe => employe.id === id);

        if (!employeDB) {
            reject(`No existe empleado con id: ${id}`);  //reject para cuando da error
        } else {
            resolve(employeDB);         //resolve solo puede enviar un parámetro, puede también ser un objeto
        }
    });


};

let getSalary = (employe) => {

    return new Promise((resolve, reject) => {

        let salaryDB = salaries.find(salary => salary.id === employe.id);

        if (!salaryDB) {
            reject(`No se encontró salario para el empleado: ${employe.name}`);
        } else {
            resolve({
                name: employe.name,
                salary: salaryDB.salary
            });
        }
    });


};


getEmploye(10).then(employe => {
    return getSalary(employe);
    })
    .then(resp => console.log(`El salario de ${resp.name} es ${resp.salary}$`))
    .catch(err => console.log(err));
