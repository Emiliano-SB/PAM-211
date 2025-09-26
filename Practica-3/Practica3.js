//Ejercicio B
//Lo que hice fue crear una promesa que retorna una promesa donde lo el usuario sea "admin" sea un acceso concedido
//y en caso contrario un acceso denegado
function verificarUsuario(usuario)
{
    return new Promise((resolve, reject) => {
        if(acceso && usuario === "admin")
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
