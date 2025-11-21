import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';



import home from './screens/home';
import profile from "./screens/profile";
import settings from "./screens/settings";




const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let iconName;
            if(route.name === 'Home'){
              iconName = 'home';
            } else if(route.name === 'Profile'){
              iconName = 'person';
            }else if(route.name === 'Settings'){
              iconName= 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle : {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={home}/>
        <Tab.Screen name="Profile" component={profile}/>
        <Tab.Screen name="Settings" component={settings}/>
      </Tab.Navigator>

    </NavigationContainer>
    );
}