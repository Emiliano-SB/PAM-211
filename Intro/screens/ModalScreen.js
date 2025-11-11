import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import { useState } from 'react'


export default function ModalScreen(){
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Button title='Mostrar modal' onPress={()=> setModalVisible(true)} color='black'>
        Picame
      </Button>

      <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.textoModal}>Soy un modal</Text>
            <Button title='Ocultar Modal' onPress={()=> setModalVisible(false)} color='black'></Button>
          </View>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#bfbfbfff',
    alignItems:'center',
    justifyContent:'center', 
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b68cd134'
  },
  modalContent:{
    backgroundColor:'#c3a1e9ff',
    padding: 25,
    borderRadius: 15,
    alignItems:'center',
  },
  textoModal:{
    color: '#000000',
    fontSize:30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    marginBottom: 25,
  }
})