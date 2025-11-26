import { Usuario } from '../models/usuario.js';
import DatabaseService from '../database/DatabaseService.js';

export class UsuarioController{
    constructor(){
        this.listeners = [];
    }

    //Inicializar el controlador con el Service
    async initialize(){
        await DatabaseService.initialize();
    }

    //Contolador para invocar el servicio de consulta cuando se le indique
    async obtenerUsuarios(){
        try {
            const data = await DatabaseService.getAll();
            return data.map( u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {

        }
    }

    //funcion para crear usuario la cual primero valida 
    async crearUsuario(nombre){
        try {
            //1. Validar datos
            Usuario.validar(nombre);

            //2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            //3. Notificar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch(error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    //funcion para eliminar usuario
    async eliminarUsuario(nombre){
        try{
            Usuario.validar(nombre);
            await DatabaseService.delete(nombre.trim());
            this.notifyListeners();
        } catch(error){
            console.error('Error al eliminar usuario:', error);
            throw error;
        }
    }

    //Funcion para actualizar usuario
    async actualizarUsuario(id, nuevoNombre){
        try{
            Usuario.validar(nuevoNombre);

            const usuarioActualizar = await DatabaseService.update(id, nuevoNombre.trim());
            this.notifyListeners();
            return new Usuario(
                usuarioActualizar.id,
                usuarioActualizar.nombre,
                usuarioActualizar.fecha_creacion
            );
        } catch(error){
            console.error('Error al actualizar usuario:', error);
            throw error;
        }
    }

    //Sistema de observadores para actualizar la vista automáticamente
    addListener(callback){
        this.listeners.push(callback);
    }

    removeListener(callback){
        this.listeners = this.listeners.filter( l => l !== callback);
    }

    notifyListeners(){
        this.listeners.forEach( callback => callback());
    }
}