//1. Imports: Zona de importaciones a las screens (pantallas)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react'; //Importamos React y useState ya que lo ocuparemos más adelante
import { Button } from 'react-native-web';

//2. Main: Zona de componentes (trabajaremos aquí principalmente)
export default function ContadorScreen() {

  const [contador, setContador]= useState(0); 

  return (
    //El objeto Style con la propiedad container
    <View style={styles.container}> 
        
      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>
      
      <View style={styles.botonesContainer}>
        <Button color='red' title='Agregar' onPress={()=> setContador(contador + 1)}/>
        <Button color='orange' title='Quitar' onPress={()=> setContador(contador - 1)}/>
        <Button color='green' title='Reiniciar' onPress={()=> setContador(contador *0)}/>
      </View>


      <StatusBar style="auto" />

    </View>

  );
}

//3. Estilos: Zona de estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, //Crear un contenedor y como los podemos repartir
    backgroundColor: '#836969ff', //Color de fondo
    alignItems: 'center', //Alineacion de dichos elementos que pongamos (En el eje X)
    justifyContent: 'center', //Justificacion de dichos elementos (En el eje Y)
  },
  //Ahora crearemos otra clase para un texto
  texto:{
    color:'#070709ff', //Color del texto
    fontSize: 30, //Tamaño del texto
    fontFamily: 'Times New Roman', //Para la fuente de la pantalla
    fontWeight: 'bold', //Agregar la negrita tradicional
    fontStyle: 'Italic', //Para agregar la "cursiva"
  },
  //Agregamos otro pero para el "contador"
  texto2:{
    color:'#040404ff', //Color del texto
    fontSize: 40, //Tamaño del texto
    fontFamily: 'Times New Roman', //Para la fuente de la pantalla
    fontWeight: 'bold', //Agregar la negrita tradicional
    fontStyle: 'Italic', //Para agregar la "cursiva"
    textDecorationLine: 'underline', //Para "subrayar" cualquier texto
  },
  //Agregamos otra clase para los botones
  botonesContainer:{
    marginTop: 20,//Margen para "empujar" los botones de la parte de arriba (margen superior)
    flexDirection: 'row',//Mostrar la direccion de los elementos (row = fila) ya que estan en columnas como default
    gap:20, //es para hacer separaciones a los lados de los botones
    
  },
});
