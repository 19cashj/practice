import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from './TabOneScreen';
import { TabTwoScreen } from './TabTwoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function StackedNavScreen() {
    return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TabOne') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'TabTwo') {
            iconName = focused ? 'copy' : 'copy-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="TabOne" component={TabOneScreen} options={{ title: 'Tab One' }} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Tab Two' }} />
    </Tab.Navigator>
  );
}