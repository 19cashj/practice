import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen'
import { AboutScreen } from './components/AboutScreen'
import { PostScreen } from './components/PostScreen'
import { ParamTitleScreen } from './components/ParamTitleScreen';
import { Context } from './Context'
import { StackedNavScreen } from './components/StackedNavScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [test, setTest] = useState('')
  return (
      <Context.Provider value={{test, setTest}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#3456' }, headerTintColor: '#FFF', headerTitleStyle: { fontWeight: 'bold', }}}>        
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} initialParams={{ initialParam: "I am an initial parameter",}} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
            <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post' }} />
            <Stack.Screen name="StackedNav" component={StackedNavScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ParamTitle" component={ParamTitleScreen} options={({ route }) =>
            ({ title: route.params.name,
              headerStyle: { backgroundColor: '#f4511e', },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold', fontFamily: "serif" },
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button! However I cant interact with the screen component... My brother over there can though, because he was initialized differently')}
                  title="Info"
                  color="#00cc00"
                />
              )})} />      
          </Stack.Navigator>
            <StatusBar style="auto" />    
        </NavigationContainer>
      </Context.Provider>
  );
}