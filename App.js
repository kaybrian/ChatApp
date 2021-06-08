import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Setting a timer']);


// imported screens 
import LoginScreen from './components/screens/login';
import RegisterScreen from './components/screens/Register';
import HomeScreen from './components/screens/Home';
import AddChat from './components/screens/AddChat';

const Stack = createStackNavigator();

const gloalScreenOptions = {
  headerStyle:{backgroundColor:'blue'},
  headerTintColor:'white',
  // headerTitleAlign: 'center'
};

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        // initialRouteName="Home" 
        screenOptions={gloalScreenOptions}
      >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddChat" component={AddChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

