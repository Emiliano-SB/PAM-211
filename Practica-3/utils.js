//Lo primero que hice fue declarar las variables en este caso a y b
var a;
var b;
//Después lo que hice fue crear la función de la resta tomando en cuenta que
//se debe de tener 2 variabes como parametros para que esta función pueda 
//hacer la resta y poder retornar el resultado
function resta(a, b){
    return a - b;
}
//Por ultimo con la funcion ya creada solo falta exportarla para que pueda 
//exportala a otro archivo y poner los números que se resten
export {resta};
