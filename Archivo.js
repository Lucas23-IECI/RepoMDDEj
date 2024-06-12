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


// ! tipos de cambios no primitivos

// ? object: Colección de pares clave-valor, contiene propiedades y métodos.

const estudiante = { // lo que va dentro son las propiedades del objeto

    nombre: "Lucas",
    apellido: "Méndez",
    edad: 20,
    estudiando: true, //true porque actualmente estoy estudiando
    carrera: "IECI",
    universidad: "UBB",
    nacionalidad: "Chilena",


    saludar: function () {
        console.log("Hola, soy Lucas");
    }

};



//snippets: atajo de teclado para escribir un código

console.log(estudiante);

console.log("Carrera: ", estudiante.carrera);

console.log("Estudiando: ", estudiante.estudiando);



// ? Array: Son objetos especiales que almacenan elementos. Pueden contener valores de cualquier tipo (Puede ser un array solo de numeros, solo de strings, solo de booleanos, o mezclados, etc)

const arrayNum = [1, 2, 3, 4, 5];   //array de numeros
const arrayString = ["Hola", "Mundo", "Chile"]; //array de strings
const arrayBoolean = [true, false, true, false]; //array de booleanos
const arrayMix = [1, "Hola", true]; //array mixto


console.log("Array de numeros: ", arrayNum);
console.log("Posición 1 del array de numeros: ", arrayNum[0]);
console.log("Posición 3 del array de numeros: ", arrayNum[2]);
console.log("Posición 5 del array de numeros: ", arrayNum[5]);

const array = [
    {
        nombre: "Lucas", //ESTO ES SOLO UN ELEMENTO DEL ARRAY
        universidad: "UBB"
    },
    10,
    true,
    "Hola a todos!",
    [1],
    null
]

console.log('Array: ', array); //Ojito, se pueden hacer arrays dentro de un array
console.log('Posición 3 del array: ', array[2]);
console.log('Posición 4 del array: ', array[3]);


// ? Function: Es un objeto especial en JavaScript que contiene un bloque de código ejecutable. Se puede invocar (llamar) a la función en cualquier momento.

function suma(a, b) {
    return a + b;
}

console.log("La suma es: ", suma(3, 5));

// ? Date: Se utiliza para trabajar con fechas y horas.

let fechaActual = new Date(); //new es una palabra reservada que se utiliza para crear un objeto o hacer una instancia

console.log("Fecha actual: ", fechaActual);