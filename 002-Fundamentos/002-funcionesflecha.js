let s = (n) => `Hola ${ n }`;

console.log(s("Leonel"));

let dead = {
    name: 'DeadPool',
    lastname: 'LastName',
    power: 'Aesinar',
    getName() {
        return `${this.name} ${this.lastname}`;
    }
};

console.log(dead.getName());
