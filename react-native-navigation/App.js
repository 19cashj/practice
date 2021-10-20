import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen'
import { AboutScreen } from './components/AboutScreen'
import { PostScreen } from './components/PostScreen'
import { Context } from './Context'

const Stack = createNativeStackNavigator();

export default function App() {
  const [test, setTest] = useState('')
  return (
      <Context.Provider value={{test, setTest}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">        
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} initialParams={{ initialParam: "I am an initial parameter",}} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
            <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post' }} />          
          </Stack.Navigator>
            <StatusBar style="auto" />    
        </NavigationContainer>
      </Context.Provider>
  );
}