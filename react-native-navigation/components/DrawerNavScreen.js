import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabOneScreen } from './TabOneScreen';
import { TabTwoScreen } from './TabTwoScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavScreen() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="TabOneDrawer" component={TabOneScreen} />
        <Drawer.Screen name="TabTwoDrawer" component={TabTwoScreen} />
      </Drawer.Navigator>
    );
}