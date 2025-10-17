import { Text, View, StyleSheet } from 'react-native-web'
import React, {use, useState} from 'react'
import { TouchableOpacity, Switch } from 'react-native';


export default function BotonesScreen(){

  const[prendido, setPrendido] = useState(false);
  const backgroundColor = prendido ? '#f5f5f5' : '#121212' ;
  const textColor = prendido ? '#000' : '#FFF';
  
    return (
      <View style= {[styles.container, {backgroundColor}]}>

        <Text style={[styles.texto, {color: textColor}]}> Estado: {prendido ? 'prendido' : 'apagado'}</Text>

        <TouchableOpacity 
        style={styles.botonEncender} 
        onPress={()=>setPrendido(true)}> 
        <Text style={styles.textoBoton}>Prender</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botonApagar} 
        onPress={()=>setPrendido(false)}> 
        <Text style={styles.textoBoton}>Apagar</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>

          <Text style={[styles.switchLabel, {color: textColor}]}>Control de Switch: </Text>
          <Switch value = {prendido} onValueChange={setPrendido}></Switch>

        </View>

      </View>
    )

}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#836969ff', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  texto:{
    color:'#07060aff',
    fontSize: 20, 
    marginBottom: 30,
    fontFamily: 'Times New Roman', 
    fontWeight: 'bold', 
    fontStyle: 'Italic', 
  },
  botonEncender:{
    backgroundColor:'#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8, 
    marginBottom: 20,
  },
  botonApagar:{
    backgroundColor:'#f44336',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8, 
    marginBottom: 20,
  },
  textoBoton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer:{
    flexDirection: 'row',
    alingItems: 'center',
  },
  switchLabel:{
    fontSize: 16,
    marginRight: 10,
  },
})