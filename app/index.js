import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./../screens/Screens-Login/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
function StackLogin() {
  return (
    <StackLogin.Navigator>
      <StackLogin.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </StackLogin.Navigator>
  );
}

export default function Page() {
  return (
    <NavigationContainer>
      <StackLogin />
    </NavigationContainer>
  );
}
