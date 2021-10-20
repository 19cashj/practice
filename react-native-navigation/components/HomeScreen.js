import React from 'react';
import { StyleSheet, View, Button } from "react-native";
import { Context } from '../Context'

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <Button title="Go to About" onPress={() => navigation.navigate('About')} />
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