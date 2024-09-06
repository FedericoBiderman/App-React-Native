import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Page from "./app/Page"; 
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InitialScreen from "./screens/Screens-Login/InitialScreen";
import LoginScreen from "./screens/Screens-Login/LoginScreen";
import LoginMailScreen from "./screens/Screens-Login/LoginMailScreen";
import LoginPasswordScreen from "./screens/Screens-Login/LoginPasswordScreen";
import LoginPasswordScreen2 from "./screens/Screens-Login/LoginPasswordScreen2";
import LoginTerminado from "./screens/Screens-Login/LoginTerminado";
import OlvideContraseñaScreen from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen";
import OlvideContraseñaScreen2 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen2";
import OlvideContraseñaScreen3 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen3";
import OlvideContraseñaScreen4 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen4";
import MatcheoScreen from "./screens/Screens-Match/MatcheoScreen";
import PursuerScreen from "./screens/Screens-Match/PursuerScreen";
import NewPasswordScreen from "./screens/Screens-NewPassword/NewPasswordScreen";
import NewPasswordScreen2 from "./screens/Screens-NewPassword/NewPasswordScreen2";
import RepeatPasswordScreen from "./screens/Screens-NewPassword/RepeatPasswordScreen";
import RepeatPasswordScreen2 from "./screens/Screens-NewPassword/RepeatPasswordScreen2";
import NewPasswordFinishScreen from "./screens/Screens-NewPassword/NewPasswordFinishScreen";
import VolverInicioSesionScreen from "./screens/Screens-NewPassword/VolverInicioSesionScreen";
import OlvideContraseñaScreen2 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen2";
import OlvideContraseñaScreen3 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen3";
import OlvideContraseñaScreen4 from "./screens/Screens-Olvidecontrasena/OlvideContrasenaScreen4";
import MatcheoScreen from "./screens/Screens-Match/MatcheoScreen";
import PursuerScreen from "./screens/Screens-Match/PursuerScreen";

const StackLogin = createStackNavigator();
const StackMatch = createStackNavigator();
const StackChat = createStackNavigator();
const StackAjustes = createStackNavigator();
const StackHome = createStackNavigator();
const StackPerfil = createStackNavigator();
const StackSignup = createStackNavigator();
const StackOlvideContraseña = createStackNavigator();
const StackNuevaContraseña = createStackNavigator();
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

function StackNuevaContraseña() {
  return (
    <StackNuevaContraseña.Navigator>
      <StackNuevaContraseña.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen
        name="NewPasswordScreen2"
        component={NewPasswordScreen2}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen
        name="RepeatPasswordScreen"
        component={RepeatPasswordScreen}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen
        name="RepeatPasswordScreen2"
        component={RepeatPasswordScreen2}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen
        name="NewPasswordFinishScreen"
        component={NewPasswordFinishScreen}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen
        name="VolverInicioSesionScreen"
        component={VolverInicioSesionScreen}
        options={{ headerShown: false }}
      />
    </StackNuevaContraseña.Navigator>
  );
}

function StackMatch() {
  return (
    <StackMatch.Navigator>
      <StackMatch.Screen
        name="PursuerScreen"
        component={PursuerScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreenYes"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreenNo"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreen2"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreen2Yes"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreen2No"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="PursuerScreen3"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
        <StackMatch.Screen
        name="PursuerScreen3Yes"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
        <StackMatch.Screen
        name="PursuerScreen3No"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
        <StackMatch.Screen
        name="PursuerScreen4"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ValidateEmailNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MatcheoScreen"
        component={MatcheoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Page />
      <MyTabs />
    </NavigationContainer>
  );
}

/*import InitialScreen from './screens/Screens-Login/InitialScreen';
import LoginScreen from './screens/Screens-Login/LoginScreen';
import LoginMailScreen from './screens/Screens-Login/LoginMailScreen';
import LoginPasswordScreen from './screens/Screens-Login/LoginPasswordScreen';
import LoginPasswordScreen2 from './screens/Screens-Login/LoginPasswordScreen2';
import LoginTerminado from './screens/Screens-Login/LoginTerminado';
import ScreenD1 from './Screens-Perfil/StackD/ScreenD1';
import ScreenD2 from './Screens-Perfil/StackD/ScreenD2';


<Stack.Navigator initialRouteName="InitialScreen">
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
      <StackOlvideContraseña.Screen
        name="OlvideContrasenaScreen"
        component={OlvideContrasenaScreen}
        options={{ headerShown: false }}
      />
      <StackOlvideContraseña.Screen
        name="OlvideContrasenaScreen2"
        component={OlvideContrasenaScreen2}
        options={{ headerShown: false }}
      />
      <StackOlvideContraseña.Screen
        name="OlvideContrasenaScreen3"
        component={OlvideContrasenaScreen3}
        options={{ headerShown: false }}
      />
      <StackOlvideContraseña.Screen
        name="OlvideContrasenaScreen4"
        component={OlvideContrasenaScreen4}
        options={{ headerShown: false }}
      />
      <StackMatch.Screen
        name="MatcheoScreen"
        component={MatcheoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
*/
