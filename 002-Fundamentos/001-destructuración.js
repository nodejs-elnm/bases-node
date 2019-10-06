let dead = {
    name: 'DeadPool',
    lastname: 'LastName',
    power: 'Aesinar',
    getName: function() {
        return `${this.name} ${this.lastname}`;
    }
};


// Destructuración
let { name: n, lastname: l, power: p } = dead;

console.log(n, l, p);


