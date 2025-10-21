import { Text, View, StyleSheet } from 'react-native-web'


export default function ScrollScreen(){
  
    return (
      <View style={styles.container}>
        <Text>Proximamente..............</Text>
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

});