import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './Screens/Menu';
import InicioSesion from './Screens/InicioSesion';
import Registro from './Screens/Registro';
import HomeScreen from './Screens/HomeScreen';
import TransaccionesScreen from './Screens/TransacciScreen';
import PresupuestoScreen from './Screens/PresupuestoScreen';
import NotifiScreen from './Screens/NotifiScreen';
import GraficasScreen from './Screens/GraficasScreen';
import ActividadScreen from './Screens/ActividadScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transacciones" component={TransaccionesScreen} />
        <Stack.Screen name="Presupuesto" component={PresupuestoScreen} />
        <Stack.Screen name="Notificaciones" component={NotifiScreen} />
        <Stack.Screen name="Graficas" component={GraficasScreen}/>
        <Stack.Screen name="Actividad" component={ActividadScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}