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