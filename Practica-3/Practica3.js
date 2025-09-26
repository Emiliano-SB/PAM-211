//Ejercicio B
//Lo que hice fue crear una promesa que retorna una promesa donde lo el usuario sea "admin" sea un acceso concedido
//y en caso contrario un acceso denegado
function verificarUsuario(usuario)
{
    return new Promise((resolve, reject) => {
        if(usuario === "admin")
        {
            resolve("Acceso concedido");
        }
        else
        {
            reject("Acceso denegado");
        }
    });
}

//En este caso va a mostrar el mensaje de Acceso concedido
verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.log(err));

//En este caso va a mostrar este mensaje
verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.log(err));

//Ejercicio C
function simularPeticionAPI(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}
//Lo que hice fue crear una función asíncrona (Async function) en donde le defini la variable "datos" 
//la cuál va a esperar con un "await" el tiempo que se declaro en la promesa de la función "simularPeticionAPI" para después
//imprimir el mensaje en la consola
async function obtenerDatos(){
    let datos = await simularPeticionAPI();
    console.log(datos);
}
//Estos datos como tal los agregue para que se note un poco "real" la petición que se me pide en el ejercicio
console.log("Iniciando petición a la API...");
obtenerDatos(); //Aquí se llama a la función de "obtenerDatos" para que empiece a ejecutarse las funciones anteriores 
console.log("Petición en proceso...");
