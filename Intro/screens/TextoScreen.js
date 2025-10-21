import { StyleSheet, Text, View, Button, Alert, TextInput, Platform } from "react-native"
import React, {useState} from 'react'


export default function TextoScreen(){

  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState(''); 
  const [texto, setTexto] = useState(''); 

  const mostrarAlerta = () => {
    if(nombre.trim() === '' || contrasena.trim() === '' || texto.trim() === ''){
      if(Platform.OS === 'web'){
        window.alert('Error: Por favor complete todos los campos');
      }
      else{
        Alert.alert('Error: Por favor complete todos los campos');
      }
    } 
    else{
      if(Platform.OS === 'web'){
        window.alert(`Hola ${nombre}`);
      }
      else{
        Alert.alert(`Hola ${nombre}`);
      }
    }
  }

    return (
      <View style= {styles.container}>

        <Text style={styles.titulo}>Practica TextInput & Alert</Text>

        <TextInput 
        placeholder = 'Escribe tu nombre' 
        value = {nombre} 
        onChangeText={setNombre}
        maxLength={50}
        style={styles.recuadro}>
        </TextInput>

        <TextInput
        placeholder ='Escribe tu contraseña' 
        value = {contrasena} 
        onChangeText={setContrasena}
        secureTextEntry={true}
        maxLength={20}
        style={styles.recuadro}
        keyboardType="numeric">
        </TextInput>

        <TextInput
        placeholder='Escribe tu texto (maximo 4 lineas)' 
        value = {texto} 
        onChangeText={setTexto}
        multiline={true}
        numberOfLines={4}
        maxLength={200}
        style={styles.recuadro}>
        </TextInput>

        <Button color= 'brown' title='Mostrar Saludo' onPress={mostrarAlerta}></Button>
      </View>
    )

}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#716363ff', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
  },
  titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro:{
    borderWidth: 1,
    bordeColor: '#000000ee',
    padding: 10,
    marginBottom: 20,
  },
});