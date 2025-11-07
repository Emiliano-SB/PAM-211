import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground, Image, Button } from 'react-native';

const BackgroundImagen = require("../assets/fondoRes2.jpg")

export default function InicioScreen() {
            return (
                <ImageBackground
                source={BackgroundImagen}
                style={styles.backgorund}
                resizeMode='cover'>
                    <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={true} contentContainerStyle={styles.contenidoScroll}>
                        <View style={styles.container}>
                            <Text style={styles.texto} >Restaurante "El Paso"</Text>
                            <Text style={styles.descripcion}>Bienvenido al restaurante El Paso, todos nuestros productos son hechos con productos de primera calidad todo pensando en la satisfacción de nuestro cliente.</Text>
                            <Text style={styles.descripcion}>NOTA: Recuerde que en este restaurante hace todo platillo al momento y tienen un tardo de al menos 20 minutos de espera para su entrega de dicho platillo</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.texto}>Platillos</Text>
                            <Text style={styles.tipo}>Entradas</Text>
                            <Text style={styles.descripcion}>Sopa de tortilla</Text>
                            <Image source={sopadetortilla}></Image>
                            <Text style={styles.descripcion2}>Descripción: Sopa realizada a base de jitomate, chile chipotle y tortilla dorada</Text>
                            <Text style={styles.descripcion2}>Precio: $90</Text>
                            <Button color='gray' title= 'Pedir'></Button>
                            <Text style={styles.descripcion}></Text>
                            <Text style={styles.descripcion}></Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            )

}

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    texto:{
        color:'#fafafaff',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'Italic',
        marginTop:20
    },
    scrollArea:{
        flex: 1,
    },
    contenidoScroll:{
        alignItems: 'center',
        paddingVertical: 20,
    },
    backgorund:{
        width: width,
        height: height,
    },
    descripcion:{
        color: '#fafafaff',
        fontSize: 20,
        fontFamily: 'Times New Roman',
        marginTop: 20
    },
    descripcion2:{
        color: '#fafafaff',
        fontSize: 20,
        fontFamily: 'Times New Roman',
    },
    tipo:{
        color:'#fafafaff',
        fontSize: 20,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'Italic',
        marginTop:20
    },
})