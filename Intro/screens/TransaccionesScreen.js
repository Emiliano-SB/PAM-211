import { Text, StyleSheet, View, Platform, Alert, Button, TextInput, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'

export default function TransaccionesScreen() {

    const [numero, setNumero] = useState('');
    const [nombre, setNombre] = useState('');
    const [banco, setBanco] = useState(''); 
    const [cantidad, setCantidad] = useState('');
    const [presionar, setPresionar] = useState(false);


    const carga =()=>{
      setPresionar(true);
      setTimeout(()=>{
        setPresionar(false);
        if(Platform.OS === 'web'){
            window.alert('Transaccion realizada');
        } else{
            Alert.alert('Transaccion realizada');
        }
      }, 3000);
    };



    return (
      <View style={styles.container}>

        <View style={styles.contenido}>

            <Text style={styles.titulo}>Transacciones</Text>

            <Text style={styles.subtitulo}>Clave/Número tarjeta</Text>
            <TextInput 
            value = {numero} 
            onChangeText={setNumero}
            maxLength={50}
            style={styles.recuadro}
            keyboardType='numeric'>
            </TextInput>

            <Text style={styles.subtitulo}>Nombre del destinatario</Text>
            <TextInput 
            value = {nombre} 
            onChangeText={setNombre}
            maxLength={50}
            style={styles.recuadro}>
            </TextInput>

            <Text style={styles.subtitulo}>Nombre del banco</Text>
            <TextInput
            value={banco}
            onChangeText={setBanco}
            maxLength={70}
            style={styles.recuadro}>
            </TextInput>

            <Text style={styles.subtitulo}>Cantidad de la transacción</Text>
            <TextInput
            value={cantidad}
            onChangeText={setCantidad}
            maxLength={20}
            style={styles.recuadro}
            keyboardType='numeric'>
            </TextInput>

            <Text style={styles.totalOperacion}>Total: ${parseFloat(cantidad|| 0).toFixed(2)}</Text>
        </View>

        <View style={styles.botonContainer}>
          {presionar ? (<ActivityIndicator size='large' color='blue'></ActivityIndicator>) : (<Button color='black' title='Completar Carga' onPress={carga}></Button>)}
        </View>

      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitulo:{
    fontSize: 18,
  },
  recuadro:{
    backgroundColor: '#cac8c8ee',
    borderRadius: 5,
    bordeColor: '#cac8c8ee',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
    height: 50,
    width: '100%',
  },
  contenido:{
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  botonContainer:{
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    bottom: 20,
    alignSelf: 'center',
  },
})