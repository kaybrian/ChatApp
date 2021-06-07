import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// imported screens 
import LoginScreen from './components/screens/login';
import RegisterScreen from './components/screens/Register';

const Stack = createStackNavigator();

const gloalScreenOptions = {
  headerStyle:{backgroundColor:'blue'},
  headerTintColor:'white',
  headerTitleAlign: 'center'
};

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={gloalScreenOptions}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

