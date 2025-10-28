import { TurboModuleRegistry } from 'react-native';
import { Text, View, StyleSheet, ScrollView,} from 'react-native-web'


export default function ScrollScreen(){
  
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.scrollArea} showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>BLACKPINK</Text>
          <Text style={styles.subtitle}>¿Quienes son?</Text>
          <Text style={styles.text}>Blackpink es un grupo musical femenino surcoreano formado en 2016 por YG Entertainment </Text>
          <Text style={styles.subtitle}>Discografia</Text>
          <Text style={styles.text}>Álbumes de Estudio Coreanos:</Text>
            <Text >-"THE ALBUM" (2020) su primer album completo durante sus primero 4 años de carrera, 
              "BORN PINK" (2022) su segundo album completo,
              tienen tambien EPs y Sencillos mas conocidos como lo son:
              "Square One" (2016): primera canción de un grupo femenino de K-pop en alcanzar el #1 en los charts de Corea del Sur y tambien la canción BOOMBAYAH,
              "Square Up" (2017) su primer mini album de toda la carrera
             y "Kill This Love" (2019)su título poderoso que consolidó su estatus global.</Text>
          <Text style={styles.subtitle}>Records que tienen</Text>
            <Text style={styles.text}>BLACKPINK es un grupo récord en muchos aspectos:
            YouTube: Son el artista femenino con más suscriptores en el mundo y tienen varios de los vídeos más vistos en 24 horas. "How You Like That" y "Kill This Love" batieron récords al momento de su lanzamiento.
            , Spotify: Son el grupo femenino de K-pop más escuchado en la plataforma.
            , Coachella: Fueron las primeras artistas coreanas en encabezar el escenario principal del Festival Coachella en 2023.
            , charts Internacionales: Sus canciones han entrado en el Billboard Hot 100 de EE. UU. y han alcanzado el #1 en listas de todo el mundo.</Text>
        </ScrollView>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: '#836969ff',
  },
  scrollArea:{
    flex: 1,
  },
  item:{
    backgroundColor: '#836969ff',
    color:'#eeeaeaff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContent:{
    alignItems: 'center',
    paddingVertical: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fefefeff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color:'#000000ff',
    textAlign: 'center',
    backgroundColor: '#d34db6ff',
    borderRadius: 10,
    marginVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alingSelf: 'center'

  },
  text:{
    fontSize:16,
    color: '#000000ff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed:{
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
  }

});