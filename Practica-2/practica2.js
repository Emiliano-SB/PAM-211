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

