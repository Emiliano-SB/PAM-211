import { StyleSheet, Text, View } from "react-native-web"


export default function TextoScreen(){
  
    return (
      <View style= {styles.container}>
        <Text style={styles.texto}>Proximamente.......</Text>
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
    fontSize: 30, 
    fontFamily: 'Times New Roman', 
    fontWeight: 'bold', 
    fontStyle: 'Italic', 
  },
})