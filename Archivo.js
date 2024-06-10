// ! Variables

// ?  let: Se utiliza para declarar una variable que cambia con el tiempo

let nombre = "Lucas";

console.log("El nombre es: ", nombre);

// ?  const: Se utiliza para declarar una variable que no cambia con el tiempo

const edad = 20;

console.log("La edad es: ", edad);

// ? var: Se utiliza para declarar una variable que cambia con el tiempo, pero no se recomienda el uso

var apellido = "Méndez";

console.log("El apellido es: ", apellido);

const nombreCompleto = "LUCAS GABRIEL MÉNDEZ RISOPATRÓN"; //ocupar Camel Case



// ! Tipos de datos primitivos

// ? Number: Representan tanto números enteros como de punto flotante

const edadEstudiante = 20;

const num = 1 / 0;

console.log(num);

const num1 = Infinity;

console.log("num 1: ", num1);

const num2 = -Infinity;

console.log("num 2: ", num2);

const errorCalculo = "no" / 2;

console.log("Error: ", errorCalculo);

// ? BigInt: Se utiliza para representar números enteros mayores que 2^53 - 1

// ? String: Cadena de caracteres que se definen en comillas

/* 
comilla simple = ''
comilla doble = ""
comilla invertida o backsticks = ``	
*/

const saludo = "Hola";
const despedida = 'Adiós, nos vemos';
const frase = `${saludo} a todos, como estan?`; // template literal o template string, mencionar a ciertas variables que se pueden invocar

console.log("Saludo: ", frase);

// ? Boolean: Representa un valor lógico verdadero o falso

const esVerdadero = true;
const esFalso = false;

console.log("Verdad: ", esVerdadero);
console.log("Falso: ", esFalso);

// ? Null: Representa un valor nulo o "vacío"

const valorNulo = null;

console.log("Valor nulo: ", valorNulo);

// ? Undefined: Representa un valor no definido

let valorNoDefinido;

console.log("Valor no definido: ", valorNoDefinido);

// ? Symbol: Se utiliza para crear identificadores únicos para objetos

const simbolo = Symbol("Simbolo");

console.log("Simbolo: ", simbolo);
