import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground, Image, Button, Platform, Alert } from 'react-native';

const BackgroundImagen = require("../assets/fondoRes2.jpg")

const mostrarAlerta = (platillo, precio) => {
    const mensaje = `${platillo}\nPrecio: $ ${precio}`;
    
    if(Platform.OS == 'web'){
        const confirmar = window.confirm(`Confirmar Orden\n\n${mensaje}\n\n¿Desea confirmar su orden?`);
        if(confirmar) {
            window.alert('¡Orden confirmada!');
        }
    }
    else{
        Alert.alert('Confirmar Orden',mensaje,[{ text: 'Cancelar', style: 'cancel'}, {text: 'Confirmar', onPress: () => Alert.alert('¡Orden confirmada!', `Su orden de ${platillo} ha sido procesada.`)}]);
    }
}

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
                    <Image source={require('../assets/sopadetortilla.jpg')} style={{width: 200, height: 150, marginVertical: 10}}></Image>
                    <Text style={styles.descripcion2}>Descripción: Sopa realizada a base de jitomate, chile chipotle y tortilla dorada</Text>
                    <Text style={styles.descripcion2}>Precio: $90</Text>
                    <Button color='gray' title= 'Pedir' onPress={() => mostrarAlerta('Sopa de tortilla', '90.00')}></Button>
                    
                    <Text style={styles.descripcion}>Sopa de Champiñon</Text>
                    <Image source={require('../assets/cremadechampiñon.jpg')} style={{width: 200, height: 150, marginVertical: 10}}></Image>
                    <Text style={styles.descripcion2}>Descripción: Crema realizada con crema semi-descremada y champiñon órganico</Text>
                    <Text style={styles.descripcion2}>Precio: $95</Text>
                    <Button color='gray' title= 'Pedir' onPress={() => mostrarAlerta('Sopa de Champiñon', '95.00')}></Button>
                    
                    <Text style={styles.tipo}>Bebidas</Text>
                    <Text style={styles.descripcion}>Sangría de Vino Tinto</Text>
                    <Image source={require('../assets/sangria.jpg')} style={{width: 200, height: 150, marginVertical: 10}}></Image>
                    <Text style={styles.descripcion2}> Descripción: Bedida preparada con vino tinto, refresco de limón y jugo de limón natural (Solo venta para mayores de edad)</Text>
                    <Text style={styles.descripcion2}>Precio: $60</Text>
                    <Button color='gray' title= 'Pedir' onPress={() => mostrarAlerta('Sangría de Vino Tinto', '60.00')}></Button>
                    
                    <Text style={styles.descripcion}>Limonada mineral con fresa</Text>
                    <Image source={require('../assets/Limonada.jpg')} style={{width: 200, height: 150, marginVertical: 10}}></Image>
                    <Text style={styles.descripcion2}> Descripción: Bedida preparada a base de jugo natural de limón, agua mineral y extracto de fresa natural</Text>
                    <Text style={styles.descripcion2}>Precio: $70</Text>
                    <Button color='gray' title= 'Pedir' onPress={() => mostrarAlerta('Limonada mineral con fresa', '70.00')}></Button>
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