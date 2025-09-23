//Ejercicio A
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion:
    {
        ciudad: "Qro",
        pais: "MX"
    }
};
//Lo que hice en este código fue usar el desestructuración del objeto "persona" para poder reducir el código
//y así agrupar los datos de el objeto en una sola linea
const { nombre, edad, direccion: { ciudad, pais } } = persona;
//Ahora lo que hice aqui fue ya imprimir en consola lo que es el saludo del ejercicio que nos pide con todos los datos
//que se nos dieron dentro del ejercicio que es mostrando el nombre de la persona, su edad y la ciudad en la que vive el usuario
console.log("Hola, me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " +persona.direccion.ciudad+ ".");

//Ejercicio B
const productos=[
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];
//Aquí lo que hice fue lo que es hacer método para filtar el arreglo "productos" para que el primer filtro (método filter) solo
//filtre del arreglo para solo quedarme con los productos que sea su precio mayor a $1000 
const productosfiltrados = productos.filter(producto => producto.precio > 1000);
//Y ahora lo que hice fue el segundo filtro (método map) para que después de filtrar los productos solo me regrese los 
// nombre de dichos productos que se pide en el primer filtro
const nombres = productosfiltrados.map(productos => productos.nombre);
console.log(nombres);

//Ejercicio C
const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];
//De acuerdo al ejercicio que nos pidio el maestro lo primero que hice fue usar un filtro (método find) para buscar
//dentro del arreglo que nos dieron a la persona que se llama "Luis"
const encontrado = personas.find(persona => persona.nombre === "Luis");
//Después de ese primer filtro lo que hice fue usar un método (forEach) para mostrar el nombre de las personas que se encuentran
//dentro del arreglo e imprimirlos los nombres
const nom = personas.forEach(persona => console.log("Nombre: "+persona.nombre));
//Por último lo que hice fue usar un método (reduce) para sumar todas las edades de las personas  
const suma = personas.reduce((acomulador, persona)=> acomulador + persona.edad,0);
//Aquí lo que hice fue imprimir dentro de la consola los resultados del filtro del método find y el reduce
console.log(encontrado);
console.log("Suma de edades: "+suma);


