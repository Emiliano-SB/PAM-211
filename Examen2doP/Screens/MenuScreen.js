import { Text, StyleSheet, View } from 'react-native';

export default function MenuScreen() {
            return (
                <View style={styles.container}>
                    <Text style={styles.texto} >Examen 2do parcial</Text>
                </View>
            )

}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#8989c5e3', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    texto:{
    color:'#07060aff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'Italic',
  },
})