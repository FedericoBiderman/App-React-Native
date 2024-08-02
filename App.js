import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './Screens-Login/InitialScreen';
import LoginScreen from './Screens-Login/LoginScreen';
//import LoginMailScreen from './Screens-Login/LoginMailScreen';
//import LoginPasswordScreen from './Screens-Login/LoginPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginMail"
          component={LoginMailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPassword"
          component={LoginPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}