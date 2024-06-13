/*
## Ejercicios Variables y Tipos de datos!!!

---

1. Declara una variable llamada `nombre` y asígnale un valor de tipo `string`.
2. Declara una variable llamada edad y asígnale un valor de tipo `number`.
3. Declara una variable llamada `puedoConducir` y asígnale un valor de tipo `boolean` .
4. Para cada variable se debe imprimir por consola el resultado de cada variable declarada.
5. Para cada variable se debe imprimir el tipo de dato que es por consola.
*/

console.log('Ejercicios Variables y Tipos de datos\n\n');

let nombre = "Lucas"; //1

let edad = 20; //2

let puedoConducir = true; //3

console.log('Nombre: ', nombre); //4
console.log('Edad: ', edad); //4
console.log('Puedo conducir: ', puedoConducir); //4

console.log('Nombre es de tipo: ', typeof nombre); //5 SE USA LA PALABRA RESERVADA "typeof" PARA SABER EL TIPO DE DATO DE UNA VARIABLE

console.log('Edad es de tipo: ', typeof edad); //5
console.log('Puedo conducir es de tipo: ', typeof puedoConducir); //5

console.log("\n\n");


/*
## Ejercicios Operadores Aritméticos!!!!!!

---

Dado los siguiente valores numéricos:

const numero1 = 20;
const numero2 = 40;

Se debe hacer lo siguiente:

1. `Suma (+)`: Suma numero1 y numero2. Muestra el resultado por consola.
2. `Resta (-)`: Resta numero1 y numero2. Muestra el resultado por consola.
3. `Multiplicación (*)`: Multiplica numero1 y numero2. Muestra el resultado por consola.
4. `División (/)`: Divide numero1 y numero2. Muestra el resultado por consola.
5. `Modulo (%)`:  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
*/

console.log('Ejercicios Operadores Aritméticos!\n\n');

const numero1 = 20;
const numero2 = 40;

console.log('Suma: ', numero1 + numero2); //1

console.log('Resta: ', numero1 - numero2); //2

console.log('Multiplicación: ', numero1 * numero2); //3

console.log('División: ', numero1 / numero2); //4

console.log('Modulo: ', numero2 % numero1); //5

console.log("\n\n");

/*
## Ejercicios Operadores de Asignación y comparación!!

---

Dado los siguientes valores numéricos:

```jsx
const numero1 = 15;
const numero2 = 20;
const numero3 = '25';
```

1. Muestre por consola si el numero1 es mayor o igual que numero2.
2. Muestre por consola si el numero1 es menor o igual que numero2.
3. Muestre por consola si el numero1 es menor que numero3.
4. Muestre por consola si el numero3 es menor que numero2.
5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
6. Muestre por consola si el numero1 es estrictamente igual al numero2.
*/

console.log('Ejercicios Operadores de Asignación y comparación!!\n\n');

const numeroUno = 15;
const numeroDos = 20;
const numeroTres = '25';

console.log('Numero1 es mayor o igual que numero2: ', numeroUno >= numeroDos); //1

console.log('Numero1 es menor o igual que numero2: ', numeroUno <= numeroDos); //2

console.log('Numero1 es menor que numero3: ', numeroUno < numeroTres); //3

console.log('Numero3 es menor que numero2: ', numeroTres < numeroDos); //4

console.log('Numero3 es estrictamente diferente que numero1: ', numeroTres !== numeroUno); //5

console.log('Numero1 es estrictamente igual al numero2: ', numeroUno === numeroDos); //6

console.log("\n\n");

/*
## Ejercicios Operadores condicionales!!!! 

---

Dado los siguientes valores numéricos:

```jsx
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
```

1. Imprimir en consola el número mayor de los tres.
2. Imprimir en consola el número menor de los tres.
3. Imprimir en consola si el numero1 es par o impar.
4. Imprimir en consola si el numero2 es par o impar.
5. Imprimir en consola si el numero3 es par o impar.
6. Imprimir en consola si el numero1 es múltiplo de 5.
7. Imprimir en consola si el numero2 es múltiplo de 5.
8. Imprimir en consola si el numero3 es múltiplo de 5.
*/

console.log('Ejercicios Operadores condicionales!!!\n\n');

const numeroOne = 10;
const numeroTwo = 20;
const numeroThree = 30;

console.log('El número mayor de los tres es: ', Math.max(numeroOne, numeroTwo, numeroThree)); //1


console.log('El número menor de los tres es: ', Math.min(numeroOne, numeroTwo, numeroThree)); //2

console.log('El número1 es par: ', numeroOne % 2 === 0); //3

console.log('El número2 es impar: ', numeroTwo % 2 === 1); //4

console.log('El número3 es par: ', numeroThree % 2 === 0); //5

console.log('El número1 es múltiplo de 5: ', numeroOne % 5 === 0); //6

console.log('El número2 es múltiplo de 5: ', numeroTwo % 5 === 0); //7

console.log('El número3 es múltiplo de 5: ', numeroThree % 5 === 0); //8

console.log("\n\n");


/*
## Ejercicios Ciclos!!!

---

1. Imprimir en consola los números del 1 al 10.
2. Imprimir en consola los números del 10 al 1.
3. Imprimir en consola los números del 1 al 10 pero solo los pares.
4. Imprimir en consola los números del 1 al 10 pero solo los impares.
5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
*/

for (let i = 1; i <= 10; i++) {
    console.log('Numeros: ', i);
} //1

//------------------------------------------------------------------------------------------------------------

for (let i = 10; i >= 1; i--) {
    console.log('Numeros: ', i);
} //2

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log('Numeros pares: ', i);
    }
} //3

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log('Numeros impares: ', i);
    }
} //4

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log('Numeros múltiplos de 3: ', i);
    }
} //5

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log('Numeros múltiplos de 5: ', i);
    }
} //6

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Numeros múltiplos de 3 y 5: ', i);
    }
} //7

//------------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log('Numeros múltiplos de 3 o 5: ', i);
    }
} //8

console.log("\n\n");

/*
## Ejercicios Funciones!!!!!

---

1. Crea una función que reciba un string y retorne el string en mayúsculas.
2. Crea una función que reciba un string y retorne el string en minúsculas.
3. Crear una función que reciba como parámetro 2 números y los reste.
4. Crear una función que reciba como parámetro 2 números y los divida.
5. Crear una función que reciba como parámetro 2 números y los multiplique.
6. Crear una función que reciba un string y devuelva la longitud del string.
*/

console.log('Ejercicios Funciones!!!!\n\n');

let nombrelol = "lucas";

function mayusculas(nombreEnMayusculas) {
    return nombreEnMayusculas.toUpperCase(); //se usa la función "toUpperCase()" para convertir un string a mayúsculas FUNCION DE JAVASCRIPT    
}
console.log('Nombre en mayúsculas: ', mayusculas(nombrelol)); //1

let nombrelol2 = "LUCAS";

//------------------------------------------------------------------------------------------------------------

function minusculas(nombreEnMinusculas) {
    return nombreEnMinusculas.toLowerCase(); //se usa la función "toLowerCase()" para convertir un string a minúsculas FUNCION DE JAVASCRIPT DENUEEEEVO
}
console.log('Nombre en minúsculas: ', minusculas(nombrelol2)); //2

//------------------------------------------------------------------------------------------------------------

function resta(num1, num2) {
    return num1 - num2;
}
console.log('Resta: ', resta(10, 5)); //3

function division(num1, num2) {
    return num1 / num2;
}

//------------------------------------------------------------------------------------------------------------

console.log('División: ', division(10, 5)); //4

function multiplicacion(num1, num2) {
    return num1 * num2;
}

//------------------------------------------------------------------------------------------------------------

console.log('Multiplicación: ', multiplicacion(10, 5)); //5

function longitudString(string) {
    return string.length;
}

//------------------------------------------------------------------------------------------------------------

console.log('Longitud del string: ', longitudString('Hola')); //6

console.log("\n\n");

//------------------------------------------------------------------------------------------------------------

/*
## Ejercicios Arrays!!!!!!

---

1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
*/

console.log('Ejercicios Arrays!!!!\n\n');

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let suma = 0;
for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log('Suma del array: ', suma); //1

//------------------------------------------------------------------------------------------------------------

let promedio = 0;
for (let i = 0; i < array.length; i++) {
    promedio += array[i];
}
promedio = promedio / array.length;
console.log('Promedio del array: ', promedio); //2

//------------------------------------------------------------------------------------------------------------

let arrayLetras = ['hola', 'como', 'estas'];

let arrayMayusculas = arrayLetras.map(str => str.toUpperCase());
console.log('Array de letras en mayúsculas: ', arrayMayusculas); //3

//------------------------------------------------------------------------------------------------------------

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

let arrayPares = arrayNumeros.filter(num => num % 2 === 0);
console.log('Array de números pares: ', arrayPares); //4


console.log("\n\n");
//------------------------------------------------------------------------------------------------------------

/*
## Ejercicios Objetos!!!!!

---

1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. **Crear un objeto llamado caja**: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
*/

console.log('Ejercicios Objetos!!!!\n\n');

let persona = {
    nombre: 'Lucas',
    edad: 20,
    genero: 'Masculino'
}

console.log('Persona: ', persona); //1

//------------------------------------------------------------------------------------------------------------

let caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 20,
    fotografias: 30,
    estado: 'Mal estado'
}

console.log('Caja: ', caja); //2
console.log('');

for (let propiedad in caja) { //se usa la palabra reservada "in" para recorrer las propiedades de un objeto, pa q ocupar un for ewww
    console.log('Propiedad: ', propiedad);
    console.log('Tipo de dato: ', typeof caja[propiedad]);
}

console.log("\n\n");

//------------------------------------------------------------------------------------------------------------
