import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'contador' :
            return <ContadorScreen/>;
        case 'botones' :
            return <BotonesScreen/>;
        case 'menu' :
            default: 
            return (
                <View style={styles.container}>
                    <Text style={styles.texto} >Menu de Practicas</Text>
                    <View style={styles.botonesContainer}>
                        <Button  color='red' onPress={()=>setScreen('contador')} title='Practica Contador'></Button>
                        <Button color='orange'onPress={()=>setScreen('botones')} title='Practica Botones'></Button>
                    </View>
                </View>
            )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, //Crear un contenedor y como los podemos repartir
        backgroundColor: '#836969ff', //Color de fondo
        alignItems: 'center', //Alineacion de dichos elementos que pongamos (En el eje X)
        justifyContent: 'center', //Justificacion de dichos elementos (En el eje Y)
    },
    botonesContainer:{
        marginTop: 20,//Margen para "empujar" los botones de la parte de arriba (margen superior)
        flexDirection: 'row',//Mostrar la direccion de los elementos (row = fila) ya que estan en columnas como default
        gap:20, //es para hacer separaciones a los lados de los botones
    },
    texto:{
    color:'#07060aff', //Color del texto
    fontSize: 30, //Tamaño del texto
    fontFamily: 'Times New Roman', //Para la fuente de la pantalla
    fontWeight: 'bold', //Agregar la negrita tradicional
    fontStyle: 'Italic', //Para agregar la "cursiva"
  },
})