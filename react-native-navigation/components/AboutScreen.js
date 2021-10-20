import React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import { Context } from '../Context'

export function AboutScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
          <Button title="Go to About Again" onPress={() => navigation.push('About')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
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