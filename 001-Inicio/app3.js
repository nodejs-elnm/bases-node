console.log("Inicio del programa");

setTimeout( () => {
    console.log("Primer TimeOut");
}, 1000);

setTimeout(() => {
    console.log("Segundo TimeOut");
}, 0);

setTimeout(() => {
    console.log("Tercer TimeOut");
}, 0);

console.log("Fin programa");
