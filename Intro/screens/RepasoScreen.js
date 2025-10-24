import { Text, StyleSheet, View, TextInput, Platform, Switch, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ImageBackground } from 'react-native';

const BackgroundImage = require("../assets/fondo2.png");

export default function RepasoScreen({navigation}) {

    const [aceptado, setAceptado] = useState(false);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const validarCorreo = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    const mostrarAlerta = () => {
        if(nombre.trim() === '' && correo.trim()=== '' && !aceptado){
            if(Platform.OS === 'web'){
                window.alert('Error: Por favor de completar todos los campos');
            }
            else{
                Alert.alert('Error: Por favor de completar todos los campos');
            }
        }
        else if(nombre.trim() === ''){
            if(Platform.OS === 'web'){
                window.alert('Error: Por favor ingrese su nombre completo');
            }
            else{
                Alert.alert('Error: Por favor ingrese su nombre completo');
            }
        } 
        else if( !validarCorreo(correo.trim()))
        {
            if(Platform.OS === 'web'){
                window.alert('Error: Por favor ingrese su correo correctamente, asegurese de poner el @ y su dominio');
            }
            else{
                Alert.alert('Error: Por favor ingrese su correo correctamente, asegurese de poner el @ y su dominio');
            }
        }
        else if(!aceptado){
            if(Platform.OS === 'web'){
                window.alert('Error: Por favor acepte los terminos y condiciones');
            }
            else{
                Alert.alert('Error: Por favor acepte los terminos y condiciones');
            }
        }
        else{
            if(Platform.OS === 'web'){
                window.alert(`Registro hecho con exitosamente,  ${nombre} ${correo}`);
            }
            else{
                Alert.alert(`Registro hecho con exitosamente, ${nombre}  ${correo}`);
            }
        }
    }

    const [showSplash, setShowSplash] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);  

    if(showSplash){
        return(
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
                resizeMode='cover'
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.title}>Cargando ...</Text>
                </View>
            </ImageBackground>
        );
    }

    return (
        <ImageBackground
        source={BackgroundImage}
        style={styles.background}
        resizeMode='cover'>
            <View style={styles.container}>
                <Text style={styles.texto}>Registro Usuario</Text>

                <TextInput 
                    placeholder='Escribe tu nombre completo: ' 
                    value={nombre} 
                    onChangeText={setNombre}
                    maxLength={100}
                    style={styles.recuadro}/>

                <TextInput 
                    placeholder='Escribe tu correo: ' 
                    value={correo} 
                    onChangeText={setCorreo}
                    maxLength={50}
                    style={styles.recuadro}/>
       
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Términos y Condiciones: </Text>
                    <Switch value={aceptado} onValueChange={setAceptado}/>
                </View>
                
                <View>
                    <TouchableOpacity 
                    style={styles.botonRegistrar} 
                    onPress={mostrarAlerta}> 
                        <Text style={styles.textoBoton}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        width: width, 
        height: height, 
    },
    texto: {
        color: '#fcfaffff',
        fontSize: 20, 
        marginBottom: 30,
        fontFamily: 'Times New Roman', 
        fontWeight: 'bold', 
        fontStyle: 'italic', 
    },
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
    },
    recuadro: {
        borderWidth: 1,
        borderColor: '#faf6f6ee',
        padding: 10,
        marginBottom: 20,
        width: 300,
        color: '#f5f1f1ff'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 16,
        marginRight: 10,
        color: '#f3f2f4ff',
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    botonRegistrar: {
        backgroundColor: '#645454ff',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8, 
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fef9f9ff',
        marginBottom: 10,
    }
})