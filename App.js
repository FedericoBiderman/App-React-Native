import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InitialScreen from './screens/Screens-Login/InitialScreen';
import LoginScreen from './screens/Screens-Login/LoginScreen';
import LoginMailScreen from './screens/Screens-Login/LoginMailScreen';
import LoginPasswordScreen from './screens/Screens-Login/LoginPasswordScreen';
import LoginPasswordScreen2 from './screens/Screens-Login/LoginPasswordScreen2';
import LoginTerminado from './screens/Screens-Login/LoginTerminado';
import OlvideContraseñaScreen from './screens/Screens-Olvidecontrasena/OlvideContrasenaScreen';
import OlvideContraseñaScreen2 from './screens/Screens-Olvidecontrasena/OlvideContrasenaScreen2';
import OlvideContraseñaScreen3 from './screens/Screens-Olvidecontrasena/OlvideContrasenaScreen3';
import OlvideContraseñaScreen4 from './screens/Screens-Olvidecontrasena/OlvideContrasenaScreen4';
import MatcheoScreen from './screens/Screens-Match/MatcheoScreen';


const StackLogin = createStackNavigator();
const StackMatch = createStackNavigator();
const StackChat = createStackNavigator();
const StackAjustes = createStackNavigator();
const StackHome = createStackNavigator();
const StackPerfil = createStackNavigator();
const StackSignup = createStackNavigator();
const StackOlvideContraseña = createStackNavigator();
const StackCuentaProfesionalPicker = createStackNavigator();
const StackCuentaProfesionalPursuer = createStackNavigator();

function StackLogin() {
  return (
    <StackLogin.Navigator>
      <StackLogin.Screen 
        name="InitialScreen" 
        component={InitialScreen} 
        options={{ headerShown: false }} 
      />
      <StackLogin.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <StackLogin.Screen 
        name="LoginMailScreen" 
        component={LoginMailScreen} 
        options={{ headerShown: false }} 
      />
      <StackLogin.Screen 
        name="LoginPasswordScreen" 
        component={LoginPasswordScreen} 
        options={{ headerShown: false }} 
      />
      <StackLogin.Screen 
        name="LoginPasswordScreen2" 
        component={LoginPasswordScreen2} 
        options={{ headerShown: false }} 
      />
      <StackLogin.Screen 
        name="LoginTerminado" 
        component={LoginTerminado} 
        options={{ headerShown: false }} 
      />
    </StackLogin.Navigator>
  );
}

function StackMatch() {
  return (
    <StackMatch.Navigator>
      <StackMatch.Screen 
        name="MatcheoScreen" 
        component={MatcheoScreen} 
        options={{ headerShown: false }} 
      />
    </StackMatch.Navigator>
  );
}

function StackOlvideContraseña() {
  return (
    <StackOlvideContraseña.Navigator>
      <StackOlvideContraseña.Screen 
        name="OlvideContraseñaScreen" 
        component={OlvideContraseñaScreen} 
        options={{ headerShown: false }} 
      />
      <StackOlvideContraseña.Screen 
        name="OlvideContraseñaScreen2" 
        component={OlvideContraseñaScreen2} 
        options={{ headerShown: false }} 
      />
      <StackOlvideContraseña.Screen 
        name="OlvideContraseñaScreen3" 
        component={OlvideContraseñaScreen3} 
        options={{ headerShown: false }} 
      />
      <StackOlvideContraseña.Screen 
        name="OlvideContraseñaScreen4" 
        component={OlvideContraseñaScreen4} 
        options={{ headerShown: false }} 
      />
    </StackOlvideContraseña.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="lock-closed-outline" size={24} color={color} />,
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="ValidateEmail" 
        component={ValidateEmailNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="mail-outline" size={24} color={color} />,
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="InitialScreen">
      <StackLogin.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <StackLogin.Screen name="LoginMailScreen" component={LoginMailScreen} options={{ headerShown: false }} />
      <StackLogin.Screen name="LoginPasswordScreen" component={LoginPasswordScreen} options={{ headerShown: false }} />
      <StackLogin.Screen name="LoginPasswordScreen2" component={LoginPasswordScreen2} options={{ headerShown: false }} />
      <StackLogin.Screen name="LoginTerminado" component={LoginTerminado} options={{ headerShown: false }} />
      <StackOlvideContraseña.Screen name="OlvideContrasenaScreen" component={OlvideContrasenaScreen} options={{ headerShown: false }} />
      <StackOlvideContraseña.Screen name="OlvideContrasenaScreen2" component={OlvideContrasenaScreen2} options={{ headerShown: false }} />
      <StackOlvideContraseña.Screen name="OlvideContrasenaScreen3" component={OlvideContrasenaScreen3} options={{ headerShown: false }} />
      <StackOlvideContraseña.Screen name="OlvideContrasenaScreen4" component={OlvideContrasenaScreen4} options={{ headerShown: false }} />
      <StackMatch.Screen name="MatcheoScreen" component={MatcheoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;



/*import InitialScreen from './screens/Screens-Login/InitialScreen';
import LoginScreen from './screens/Screens-Login/LoginScreen';
import LoginMailScreen from './screens/Screens-Login/LoginMailScreen';
import LoginPasswordScreen from './screens/Screens-Login/LoginPasswordScreen';
import LoginPasswordScreen2 from './screens/Screens-Login/LoginPasswordScreen2';
import LoginTerminado from './screens/Screens-Login/LoginTerminado';
import ScreenD1 from './Screens-Perfil/StackD/ScreenD1';
import ScreenD2 from './Screens-Perfil/StackD/ScreenD2';
*/