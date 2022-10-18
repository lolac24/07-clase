

//Variables
console.log('Hola JavaScript');

var pepe; //declaración de una variable
let nombre; 

const DNI = 123456789;

nombre = 'Berni'; //asignación de una variable

console.log(nombre);

nombre = 'Pepe';
nombre = 'María';

console.log(nombre);

let falso = false; 

let verdadero = true; 

console.log('===========================================================');
console.log(falso);
console.log(verdadero);
console.log(DNI);
//Mostrar datos en la consola
//concatenar datos
console.log("Hola, mi nombre es " + nombre + " y mi país es Argentina y mi DNI es " + DNI + ".")

console.log('Hola, mi nombre es ' + nombre + ' y mi país es Argentina y mi DNI es ' + DNI + '.');

//utilizamos el template string
console.log(`Hola, mi nombre es ${nombre} y mi país es Argentina y mi DNI es ${DNI}`);

console.log('===========================================================');

//Arrays
let banana = 'banana';
let manzana = 'manzana';


//               0         1          2           3
let frutas = ['peras', 'bananas', 'manzanas', 'naranjas']; 

console.log(`La primer fruta de nuestro array es: ${frutas[0]}`);
console.log(`La primer fruta de nuestro array es: ${frutas[1]}`);
console.log(`La primer fruta de nuestro array es: ${frutas[2]}`);
console.log(`La primer fruta de nuestro array es: ${frutas[3]}`);

//Método de los arreglos
console.log(`Los elementos del Array frutas son: ${frutas.length}`);

frutas.push('mangos');

console.log(`Los elementos del Array frutas son: ${frutas.length}`);

console.log(`Las frutas del arreglo son ${frutas}`);

let persona = ['Pepe', 1245789, true]; 

console.log(`Las datos del arreglo persona son: ${persona}`);

('===========================================================');

//Objetos - JSON
let pais = {
    nombre: 'Argentina' ,
    provincias: 24 ,
    capital: 'Buenos Aires' ,
    poblacion: 45000000 ,
    ubicacion: 'América',
}

let paisVecino = {
    nombre: 'Argentina' ,
    provincias: 24 ,
    capital: 'Buenos Aires' ,
    poblacion: 45000000 ,
    ubicacion: 'América',
}

console.log(pais);
console.log(`La capital del país es ${pais.capital}`);
console.log(`La capital del país es ${pais.nombre}`);
console.log(`La capital del país es ${pais.ubicacion}`);
console.log(`La capital del país es ${pais.provincias}`);

('===========================================================');
















