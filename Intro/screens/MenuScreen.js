import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextoScreen from './TextoScreen';
import ImagenesScreen from './ImagenesScreen';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import FlatlistScreen from './FlatlistScreen';
import ModalScreen from './ModalScreen';
import RepasoScreen from './RepasoScreen';
import ActividadScreen from './ActividadScreen';
import TransaccionesScreen from './TransaccionesScreen';


export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'contador' :
            return <ContadorScreen/>;
        case 'botones' :
            return <BotonesScreen/>;
        case 'textos':
            return <TextoScreen/>;
        case 'imagen':
            return <ImagenesScreen/>;
        case 'scrolles':
            return <ScrollScreen/>;
        case 'activity':
            return<ActivityScreen/>;
        case 'lista':
            return<FlatlistScreen/>;
        case 'modal':
            return<ModalScreen/>;
        case 'repaso':
            return<RepasoScreen/>;
        case 'actividad':
            return <ActividadScreen/>;
        case 'transaccion':
            return<TransaccionesScreen/>;
        case 'menu' :
            default: 
            return (
                <View style={styles.container}>
                    <Text style={styles.texto} >Menu de Practicas</Text>
                    <View style={styles.botonesContainer}>
                        <Button  color='blue' onPress={()=>setScreen('contador')} title='Practica Contador'></Button>
                        <Button color='blue'onPress={()=>setScreen('botones')} title='Practica Buttons & switch'></Button>
                        <Button color='blue' onPress={()=>setScreen('textos')} title='Practica Text Input & Alert'></Button>
                        <Button color='blue' onPress={()=>setScreen('imagen')} title='Practica ImageBackgroung & SlapshScreen'></Button>
                        <Button color= 'blue' onPress={()=>setScreen('scrolles')} title='Practica de ScrollView'></Button>
                        <Button color ='blue' onPress={()=>setScreen('activity')} title='Practica de ActivityIndicator'></Button>
                        <Button color='blue' onPress={()=>setScreen('lista')} title='Practica de FlatList y Section List'></Button>
                        <Button color='blue' onPress={()=>setScreen('modal')} title='Practica Modal'></Button>
                        <Button color='blue' onPress={()=> setScreen('repaso')} title='Repaso 1'></Button>
                        <Button color= 'blue' onPress={()=>setScreen('actividad')} title='Pantalla de Actividad (Proyecto Materia)'></Button>
                        <Button color= 'blue' onPress={()=>setScreen('transaccion')} title='Pantalla de Transacciones (Proyecto Materia)'></Button>
                    </View>
                </View>
            )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, //Crear un contenedor y como los podemos repartir
        backgroundColor: '#8989c5e3', //Color de fondo
        alignItems: 'center', //Alineacion de dichos elementos que pongamos (En el eje X)
        justifyContent: 'center', //Justificacion de dichos elementos (En el eje Y)
    },
    botonesContainer:{
        marginTop: 20,//Margen para "empujar" los botones de la parte de arriba (margen superior)
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