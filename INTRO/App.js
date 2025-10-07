
//1. Imports: Zona de importaciones a las screens (pantallas)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importamos React y useState ya que lo ocuparemos más adelante
import { Button } from 'react-native-web';

//2. Main: Zona de componentes (trabajaremos aquí principalmente)
export default function App() {
  //     variable | función
  const [contador, setContador]= useState(0); //Hacemos una funcionalidad del boton para que vaya aumentando el contador con los clics
  return (
    <View style={styles.container}> 

      <Text> Contador: {contador}</Text>
      <Button title='Agregar' onPress={()=> setContador(contador + 1)}/>
      <Button title='Quitar' onPress={()=> setContador(contador - 1)}/>
      <Button title='Reiniciar' onPress={()=> setContador(contador *0)}/>
      <StatusBar style="auto" />

    </View>

  );
}

//3. Estilos: Zona de estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
