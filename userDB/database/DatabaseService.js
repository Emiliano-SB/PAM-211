import {Platform} from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService{

    constructor(){
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize(){
        if(Platform.OS === 'web'){
            console.log('Usando LocalStorage para web');
        } else {
            console.log('Usando SQLite para móvil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT null,
                fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    //función para consultar, esta preparada para la web y móvil
    async getAll(){
        if(Platform.OS === 'web'){
            const data = localStorage.getItem(this.storageKey);
            return data ?  JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
        }
    }

    //Función para insertar
    async add(nombre){
        if(Platform.OS === 'web'){
            const usuarios = await this.getAll();

            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fecha_creacion : new Date().toISOString()
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevoUsuario;
        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios(nombre) VALUES(?)',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fecha_creacion : new Date().toISOString()
            };
        }
    }

    //Función para eliminar 
    async delete(nombre){
        if(Platform.OS === 'web'){
            const usuarios = await this.getAll();
            const usuariosFiltrados = usuarios.filter(filtro => filtro.nombre !== nombre);
            localStorage.setItem(this.storageKey, JSON.stringify(usuariosFiltrados));
        } else {
            await this.db.runAsync(
                'DELETE FROM usuarios WHERE nombre =?',
                usuarios.nombre
            );
        }
    }

    //Función para editar 
    async update(id, nuevoNombre){
        if(Platform.OS === 'web'){
            const usuarios = await this.getAll();
            const indice = usuarios.findIndex( filtro => filtro.id === id);
            if(indice !== -1){
                usuarios[indice].nombre = nuevoNombre;
                usuarios[indice].fecha_creacion = usuarios[indice].fecha_creacion || new Date().toISOString();
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                return usuarios[indice];
            } else {
                throw new Error('usuario no encontrado')
            }
        }
        else {
           if(this.db.runAsync){
            await this.db.runAsync(
                'UPDATE usuarios SET nombre =? WHERE id=?',
                [nuevoNombre, id]
            );
            return {
                id: id,
                nombre: nuevoNombre,
                fecha_creacion: new Date().toISOString()
            };
           } else {
                return await new Promise((resolve, reject) => {
                    this.db.transaction(tx => {
                        tx.executeSql(
                            'UPDATE usuarios SET nombre =? WHERE id =?',
                            [nuevoNombre, id],
                            () => resolve({
                                id: id,
                                nombre: nuevoNombre,
                                fecha_creacion: new Date().toISOString()
                            }),
                            (_, err) => {reject(err); 
                                return false;
                            }
                        );
                    });
                });
           }
        }
    }

}

//Exportar instacia de la clase
export default new DatabaseService();