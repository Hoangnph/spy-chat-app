import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, SignUpScreen, SplashScreen } from "./screens";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./context/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
