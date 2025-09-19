//Ejecicio A
//En esta parte solo modificamos el tipo de variable de "edad" ya que se esta dejando constante y no se modifica después 
//y lo que es la variable de "nombre" la dejamos así como esta ya que después de la declaración se modifica lo que contine este mismo
var nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";
//Lo que realice fue reasignar el tipo de dato en "ver saludo" para que 
//se asigne como una constante ya que no se debe de modificar la informacion 
//que se pasa al concatenar todos los datos que se ingresaron y poder mostrar durante el saludo mediante 
// el comando "console.log" y que solo se muestre el saludo.
const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
console.log(saludo);

//Ejercicio B
// Lo primero que hice fue de cambiar la primera letra reservada de "function" a del tipo "var" ya que el ejercicio nos pide 
//obtener el cuadrado de 3 número diferentes, además de eso lo que hice fue agregar un "=" antes del parametro del número al calcular para que después
//del "(numero)" ahora si agregar la flecha del "arrow function" y eliminar los corchetes y el return para que solo quede la operación del cuadrado del número
//y por ultimo fue agregar los "console.log" para que muestre el resultado de los 3 números.
var cuadrado = (numero) => numero * numero;
console.log(cuadrado(5)); 
console.log(cuadrado(2));
console.log(cuadrado(3));

//Ejercicio C
//Fue ejercicio de juntando los dos códigos anteriores 
const saludoPersonalizado = (nombre, edad) => {
    return "Hola, me llamo " +nombre+  " y tengo " +edad+ " años.";
};

const mensaje = saludoPersonalizado("Emiliano", 20);
console.log(mensaje); 

