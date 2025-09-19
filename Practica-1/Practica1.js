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

