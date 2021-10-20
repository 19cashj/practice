import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import { Context } from '../Context'

export function AboutScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
          <Button title="Go to About Again" onPress={() => navigation.push('About', {itemId: Math.floor(Math.random() * 100)})} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
          <Button title="Update otherParam" onPress={()=> navigation.setParams({otherParam: Math.floor(Math.random() * 100)})}/>
          <Text>itemId: {JSON.stringify(itemId)}</Text>      
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3c3c3',
        fontSize: 12
    }
});